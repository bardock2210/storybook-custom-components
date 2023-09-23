import useSWR, { SWRConfiguration } from "swr";
import { SWRRequestOptions } from "../types";

const defaultHeaders = { "Content-Type": "application/json" };
const defaultSWROptions = {
  revalidateOnMount: false,
  revalidateOnFocus: false,
};

const fetcher = ({ endpoint, args }: SWRRequestOptions) => {
  return fetch(`https://fakestoreapi.com/${endpoint}`, {
    method: args?.method,
    headers: defaultHeaders,
    body: args?.payload,
  }).then(async (res) => {
    if (!res.ok) {
      throw await res.json();
    }

    return res.json();
  });
};

export const useRequest = (
  url: string,
  args?: SWRRequestOptions["args"],
  options?: SWRConfiguration
) => {
  options = options ? { ...defaultSWROptions, ...options } : defaultSWROptions;

  return useSWR({ endpoint: url, args }, fetcher, options);
};
