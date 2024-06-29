// Attach interceptor to axios instance

import axios from "axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

//in login ?
const URL = "http://localhost:5000/api/admin/adminDashboard";
const URL2 = "http://localhost:5000/api/form/view";
const URL3 = "http://localhost:5000/api/form/update/:id";
const URL4 = "http://localhost:5000/api/form/delete/:id";

// I have to make different URL instance to attach axios interceptors

export const axiosPrivate = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const axiosPrivate2 = axios.create({
  baseURL: URL2,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
export const axiosPrivate3 = axios.create({
  baseURL: URL3,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
export const axiosPrivate4 = axios.create({
  baseURL: URL4,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

const useAxiosInterceptor = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return {
    axiosPrivate,
    axiosPrivate2,
    axiosPrivate3,
    axiosPrivate4,
  };
};

export default useAxiosInterceptor;

// Axios interceptors are functions that Axios calls for every request and response. These interceptors can be used to modify the request or response, handle errors, or add additional functionality like authentication tokens, logging, or custom headers
