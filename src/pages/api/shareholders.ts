import prisma from '../../../lib/prisma';
import type { NextApiHandler } from 'next';

// This API endpoint will return all shareholders.
// You might need to uplift this to perform better and fullfil the business requirements.
const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }

    const {
      searchTerm,
      searchField,
      cursor,
      page,
      pageSize,
      orderBy,
      order,
      limit,
    } = req.query as unknown as {
      searchTerm: string;
      searchField: string;
      cursor: string;
      page: number;
      pageSize: number;
      orderBy: string;
      order: string;
      limit: number;
    };

    // how many rows per page
    const take = pageSize ? Number(pageSize) : 10;

    // The result will be that if page and pageSize are not null, then we get the skip value
    // If page and pageSize are null, then we just get the first page of data
    const skip = page && pageSize ? Number(page) * Number(pageSize) : 1;

    const [shareholders, totalShareholders] = await prisma.$transaction([
      prisma.shareholder.findMany({
        skip: skip,
        take: take,
        orderBy: orderBy ? { [orderBy]: order } : undefined,
        where: searchTerm
          ? {
              [searchField]: {
                startsWith: searchTerm,
                // case insensitive
                mode: 'insensitive',
              },
            }
          : {},
      }),
      prisma.shareholder.count({
        // take is limited for the filter option e.g. in this case, for the top 50 shareholders
        take: limit ? Number(limit) : undefined,
        orderBy: orderBy ? { [orderBy]: order } : undefined,
        where: searchTerm
          ? {
              [searchField]: {
                startsWith: searchTerm,
                mode: 'insensitive',
              },
            }
          : {},
      }),
    ]);

    // id to be stored if using cursor-based pagination
    const myCursor = shareholders[shareholders.length - 1]?.id;

    res.status(200).json({ shareholders, totalShareholders, myCursor });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
