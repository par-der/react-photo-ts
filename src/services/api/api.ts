import {apiClient, formApiClient} from "../api-client.ts";
import {IPaginatedResponse} from "../../types/api.ts";
import {IProduct} from "../../types/product.ts";

export const getProducts = async (params: Record<string, string>): Promise<IPaginatedResponse<IProduct>> => {
    apiClient.defaults.params = params;
    const response = await apiClient.get("products/");
    return response.data;
};

export const getProductById = async (id: string): Promise<IProduct> => {
    const response = await apiClient.get(`products/${id}`);
    return response.data;
};

export const createProduct = async (data: FormData): Promise<IProduct> => {
    const response = await formApiClient.post("products/", data);
    return response.data;
}

export const updateProduct = async (id: string, payload: FormData): Promise<IProduct> => {
    const {data} = await formApiClient.put(`products/${id}`, payload);
    return data;
}

export const deleteProduct = async (id: number): Promise<void> => await apiClient.delete(`products/${id}`);
