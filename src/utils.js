//获取当前日期
export const getDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year} / ${month} / ${day}`;
};

//设置自适应高度的textarea
// function calculateNodeStyling(node){
//   const style = window.getComputedStyle(node)
//   if(style=== null ){
//     return null
//   }

//   return
// }
