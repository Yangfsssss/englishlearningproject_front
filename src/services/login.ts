import axios from "axios";

import { UserToken } from "../types";

const baseUrl = "https://rcchi.sse.codesandbox.io/api/user";

export const login = async (username: { username: string }) => {
  const res = await axios.post<UserToken>(`${baseUrl}/login`, username);
  return res;
};

export const signUp = async (username: { username: string }) => {
  const res = await axios.post<UserToken>(`${baseUrl}/signup`, username);
  return res;
};

// export default { login, signUp };
