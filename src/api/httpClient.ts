import axios, { AxiosRequestConfig } from "axios";
export type ApiResponse<T> = T | undefined;

const httpClientInstance = axios.create({
  baseURL: "/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "json",
  },
  paramsSerializer: {
    indexes: null,
  },
});

httpClientInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!axios.isAxiosError(error)) throw error;
    return console.log(error);
  }
);

/**
 * Performs an HTTP GET request using the provided URL and configuration.
 *
 * @template T - The type of the response data.
 * @param {string} url - The URL to send the GET request to.
 * @param {AxiosRequestConfig} [config] - The configuration options for the request.
 * @returns {Promise<ApiResponse<T>>} - A promise that resolves to the response data.
 * @throws {Error} - If an error occurs during the request.
 */
async function get<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  const { data } = await httpClientInstance.get<T>(url, config);
  return data;
}

export const httpClient = {
  get,
};
