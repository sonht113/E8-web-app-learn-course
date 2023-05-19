export const getTime = (time: number) => {
  const date = new Date(time).getDate();
  const month = new Date(time).getMonth();
  const year = new Date(time).getFullYear();
  return `${date}-${month + 1}-${year}`;
};
