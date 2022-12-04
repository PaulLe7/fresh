// make money have commas
export const formatNumbers = (number: string) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
