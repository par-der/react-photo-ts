import {createProduct, deleteProduct, updateProduct} from "./api.ts";
import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {IProduct} from "../../types/product.ts";

export const useCreateProductMutation = () => {
    const options: UseMutationOptions<IProduct, Error, FormData> = {
        mutationFn: (data: FormData) => createProduct(data),
    };

    return useMutation(options);
}

export const useUpdateProductMutation = () =>
    useMutation<IProduct, Error, { id: string; payload: FormData }>({
        mutationFn: ({ id, payload }) => updateProduct(id, payload),
    });

export const useDeleteProductMutation = () => {
    return useMutation({mutationFn: (id: number) => deleteProduct(id)});
}
