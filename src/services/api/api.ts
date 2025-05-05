import {apiClient, formApiClient} from "../api-client.ts";
import {IPaginatedResponse} from "../../types/api.ts";
import {IProduct} from "../../types/product.ts";

export const getProducts = async (params: Record<string, string>): Promise<IPaginatedResponse<IProduct>> => {
    apiClient.defaults.params = params;
    const response = await apiClient.get("products/");
    return response.data;
};

export const createProduct = async (data: FormData): Promise<IProduct> => {
    const response = await formApiClient.post("products/", data);
    return response.data;
}
