export const paged = (page: number, perpage = 10) => {
  if(page<1) page = 1;
  const offset = (page-1) * perpage;
  return offset;
};
