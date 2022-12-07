import Image from 'next/image';

interface Props {
  firstName: string;
  lastName: string;
  email: string;
}

export const ShareholderAvatarCell = ({
  firstName,
  lastName,
  email,
}: Props) => {
  const fullName = `${firstName} ${lastName}`;
  const initials = `${firstName[0]}${lastName[0]}`;

  return (
    <div>
      {/* Desktop view */}
      <div className="items-center md:flex hidden">
        <div className="flex-shrink-0">
          <div className="flex flex-row items-center justify-left">
            <span
              className={`flex items-center justify-center text-xl font-medium rounded-full h-11 w-11 bg-gray-100`}
            >
              {initials}
            </span>
          </div>
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">{fullName}</div>
          <div className="flex flex-row">
            <div className="w-4 h-4 mt-0.5 mr-2">
              <Image
                className=" text-typography-grey"
                src="/icons/mail.svg"
                alt="Mail Icon"
                width={20}
                height={20}
              />
            </div>
            <div className="text-sm text-gray-500">{email || 'N/A'}</div>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="flex flex-col md:hidden">
        <div className="flex flex-row mb-4">
          <span
            className={`flex items-center justify-center text-xl font-medium rounded-full h-11 w-11 bg-gray-100`}
          >
            {initials}
          </span>
          <div className="ml-4 flex items-center text-sm font-medium text-gray-900">
            {fullName}
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-4 h-4 mt-0.5 mr-2">
            <Image
              className=" text-typography-grey"
              src="/icons/mail.svg"
              alt="Mail Icon"
              width={20}
              height={20}
            />
          </div>
          <div className="text-sm text-gray-500">{email || 'N/A'}</div>
        </div>
      </div>
    </div>
  );
};
