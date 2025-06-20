import {useQuery} from "@tanstack/react-query";
import {IPaginatedResponse} from "../../types/api.ts";
import {IProduct} from "../../types/product.ts";
import {getProductById, getProducts} from "./api.ts";

export const useGetProductsQuery = (params?: Record<string, string>) => {

    return useQuery<IPaginatedResponse<IProduct>, Error>({
        queryKey: ['products', params],
        queryFn: () => getProducts(params || {}),
    })
}

export const useProductById = (id: string) => {
    return useQuery<IProduct, Error>({
        queryKey: ['products', id],
        queryFn: () => getProductById(id),
    })
}

export const useSearchProductsQuery = (query: string, enabled: boolean) => {

    return useQuery<IPaginatedResponse<IProduct>, Error>({
        queryKey: ['products', query],
        queryFn: () => getProducts({'search': query}),
        enabled: enabled
    })
}

