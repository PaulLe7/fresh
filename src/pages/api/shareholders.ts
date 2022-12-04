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

    const { searchTerm, searchField } = req.query as {
      searchTerm: string;
      searchField: string;
    };

    const [shareholders, totalShareholders] = await prisma.$transaction([
      prisma.shareholder.findMany({
        take: 10,
        where: searchTerm
          ? {
              [searchField]: {
                startsWith: searchTerm,
                mode: 'insensitive',
              },
            }
          : {},
      }),
      prisma.shareholder.count(),
    ]);

    res.status(200).json({ shareholders, totalShareholders });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
