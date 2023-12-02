import axios from "axios";

const host = "http://localhost:8081";

axios.defaults.withCredentials = true;

export const userCreate = async (e, router) => {
  const data = {
    username: e.target.username.value,
    email: e.target.email.value,
    password: e.target.password.value,
  };
  try {
    await axios.post(`${host}/signup`, data);
    router.push("/login");
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (e, router) => {
  const data = {
    username: e.target.username.value,
    password: e.target.password.value,
  };
  try {
    const resp = await axios.post(`${host}/login`, data);
    // router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const getHomeData = async () => {
  try {
    const resp = await axios.get(`${host}`);
    return resp;
  } catch (error) {
    console.log(error);
  }
};
