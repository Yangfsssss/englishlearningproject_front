//获取当前日期
export const getDate = ():string => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year} / ${month} / ${day}`;
};

