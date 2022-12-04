import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Table = ({ children }: Props) => {
  return <table className="w-full">{children}</table>;
};
