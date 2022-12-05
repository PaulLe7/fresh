// make money have commas
export const formatNumbers = (number: Number | String) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
