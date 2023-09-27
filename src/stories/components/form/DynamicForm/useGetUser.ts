import { useRequest } from "@/hooks/useRequest";
import { SWRCustomResponse } from "@/types/request";

export interface IUser {
  id: number;
  name: string;
  email: string;
  businessName: string;
  rfc: string;
  taxZipCode: number;
  taxRegimeKey: string;
  cfdiKey: number;
  taxEmail: string;
  taxPhone: string;
}

export interface InitialState {
  name: string;
  businessName: string;
  rfc: string;
  taxZipCode: number;
  taxRegimeKey: "none" | number;
  cfdiKey: number;
  taxEmail: string;
  taxPhone: string;
}

type GetUserResponse = SWRCustomResponse & {
  data: IUser;
};

export const useGetUser = () => {
  const { data, error, isLoading, isValidating } = useRequest("products", undefined, {
    revalidateOnMount: true,
  }) as GetUserResponse;

  const initialState: InitialState = {
    name: "Bardock Ozaru",
    businessName: "Bardock Ozaru",
    rfc: "OZBA452589G456",
    taxZipCode: 54000,
    taxRegimeKey: "none",
    cfdiKey: 13,
    taxEmail: "bardock_ozaru@gmail.com",
    taxPhone: "5578963300",
  };

  return {
    userData: data,
    error,
    isLoading,
    isValidating,
    initialState,
  };
};
