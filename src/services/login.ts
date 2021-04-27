import axios from "axios";

import { UserToken } from "../types";

const baseUrl = "https://mjlrb.sse.codesandbox.io/api";

export const getUser = async () => {
  const res =await axios.get<string | undefined>(`${baseUrl}/user`);
  return res;
};

export const login = async (username: { username: string }) => {
  const res = await axios.post<UserToken>(`${baseUrl}/user/login`, username);
  return res;
};

export const signUp = async (username: { username: string }) => {
  const res = await axios.post<UserToken>(`${baseUrl}/user/signup`, username);
  return res;
};
