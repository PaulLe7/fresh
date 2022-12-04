import Image from 'next/image';

interface Props {
  initials: string;
  fullName: string;
  email: string;
}

export const ShareholderAvatarCell = ({ initials, fullName, email }: Props) => {
  return (
    <div className="flex items-center px-6">
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`flex items-center justify-center mr-4 text-xl font-medium rounded-full h-11 w-11`}
            >
              {initials}
            </span>
          </div>
        </div>
      </div>
      <div className="ml-8">
        <div className="text-sm font-medium text-gray-900">{fullName}</div>
        <div className="flex flex-row ">
          <div className="w-4 h-4 pt-0.5 mr-2">
            <Image
              className=" text-typography-grey"
              src="/icons/mail.svg"
              alt="Mail Icon"
              width={20}
              height={20}
            />
          </div>
          <div className="text-sm text-gray-500">{email}</div>
        </div>
      </div>
    </div>
  );
};
