import {createProduct} from "./api.ts";
import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {IProduct} from "../../types/product.ts";

export const useCreateProductMutation = () => {
    const options: UseMutationOptions<IProduct, Error, FormData> = {
        mutationFn: (data: FormData) => createProduct(data),
    };

    return useMutation(options);
}