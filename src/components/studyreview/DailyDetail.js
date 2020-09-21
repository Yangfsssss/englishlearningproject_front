import React from "react";

import Div from "../../styledComponents/Div";

// const Title = ({ title, onClick }) => {
//   return (
//     <Div width="100%" height="50%" border="1px solid black" onClick={onClick}>
//       {title}
//     </Div>
//   );
// };

const DailyDetail = ({ item, onClick }) => {
  return (
    <Div width="100%" height="50%" border="1px solid black" onClick={onClick}>
      {item.title}
    </Div>
  );
};

export default DailyDetail;
