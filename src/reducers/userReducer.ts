// import { useDispatch } from "react-redux";
// import { getUser } from "../services/login";

interface UserAction {
  type: string;
  data: string | undefined;
}

// const dispatch = useDispatch();

// export const initUser = (users: any) => {
//   return async (dispatch: (value: UserAction) => void) => {
//   try {
//   const { data: resData } = await getUser();
// dispatch({
//   type: "INIT_USER",
//   data: users,
// });
//   } catch (e) {
// console.log(e);
//   }
// };

const userReducer = (state = null, action: UserAction) => {
  switch (action.type) {
    case "INIT_USER":
    case "SWITCH_USER":
      return action.data;
    case "LOGOUT_USER":
      return null;
    default:
      return state;
  }
};

export default userReducer;
