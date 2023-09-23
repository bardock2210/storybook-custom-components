import { SWRMutationConfiguration } from "swr/mutation";

export type RequestOptions = {
  authToken?: string;
  method?: "GET" | "POST" | "DELETE" | "PUT";
  payload?: string;
};

export interface SWRMutateConfiguration {
  populateCache?: boolean;
  revalidate?: boolean;
  rollbackOnError?: boolean;
  throwOnError?: boolean;
  onSuccess?: (
    data: any,
    key: string,
    config: Readonly<SWRMutationConfiguration<any, any, any, string>>
  ) => void;
  onError?: () => void;
}

export interface SWRRequestOptions {
  args?: Pick<RequestOptions, "method" | "payload"> & {
    headers?: HeadersInit;
  };
  endpoint: string;
}

export interface SWRCustomMutationResponse {
  error: Error;
  isMutating: boolean;
  trigger: (
    arg?: SWRRequestOptions["args"],
    options?: SWRMutationConfiguration<any, any, any, string>
  ) => void;
}

export interface SWRCustomResponse {
  error: Error;
  isLoading: boolean;
  isValidating: boolean;
}
