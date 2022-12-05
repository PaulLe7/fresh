import moment from 'moment';
import Image from 'next/image';
import { Shareholder } from '../../types';
import { ShareholderAvatarCell } from './shareholder-avatar-cell';
import { formatNumbers } from '../../utils/formatNumbers';
import { formatDate } from '../../utils/formatDate';

interface Props {
  shareholder: Shareholder;
}

export const ShareholderMobileCell = ({
  shareholder: {
    firstName,
    lastName,
    postalCode,
    shareCount,
    heldSince,
    email,
  },
}: Props) => {
  return (
    <div className="flex flex-col w-full bg-white rounded-lg p-4 my-4 ">
      <ShareholderAvatarCell
        firstName={firstName}
        lastName={lastName}
        email={email}
      />
      <div className="flex flex-row mt-2">
        <div className="w-4 h-4 mt-0.5 mr-2">
          <Image
            className=" text-typography-grey"
            src="/icons/map.svg"
            alt="Mail Icon"
            width={20}
            height={20}
          />
        </div>
        <div className="text-sm text-gray-500">{postalCode || 'N/A'}</div>
      </div>
      <div className="flex flex-row mt-2">
        <div className="w-4 h-4 mt-0.5 mr-2">
          <Image
            className=" text-typography-grey"
            src="/icons/scale.svg"
            alt="Mail Icon"
            width={20}
            height={20}
          />
        </div>
        <div className="text-sm text-gray-500">{formatNumbers(shareCount)}</div>
      </div>
      <div className="flex flex-row mt-4">
        <div className="text-sm text-gray-700">
          Held since {formatDate(heldSince)}
        </div>
      </div>
    </div>
  );
};
