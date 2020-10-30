import axios from "axios";

const baseUrl = "https://rcchi.sse.codesandbox.io/api/user";

export const login = async (username) => {
  const res = await axios.post(`${baseUrl}/login`, username);
  return res;
};

export const signUp = async (username) => {
  const res = await axios.post(`${baseUrl}/signup`, username);
  return res;
};

// export default { login, signUp };
