import {useCreateProductMutation} from "../../services/api/mutations.ts";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {IProductRequest} from "../../types/product.ts";
import {useEffect, useState} from "react";
import {Button, FormControl, TextField} from "@mui/material";

const ProductForm = () => {
    const {mutate, isPending} = useCreateProductMutation();
    const {control, handleSubmit, watch, formState: {errors}} = useForm<IProductRequest>();
    const [preview, setPreview] = useState<string | null>(null);
    const imageInput = watch('main_image');

    useEffect(() => {
        if (imageInput) {
            const file = imageInput;
            if (file instanceof File) {
                const reader = new FileReader();

                reader.onload = () => {
                    setPreview(reader.result as string);
                };
                reader.readAsDataURL(file);
            } else {
                setPreview(null);
            }
        }
    }, [imageInput]);

    const onSubmit: SubmitHandler<IProductRequest> = async (data) => {
        const formData = new FormData();
        formData.append("article", data.article);
        formData.append("title", data.title);
        formData.append("main_image", data.main_image);
        mutate(formData);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-4 p-8 border border-gray-200 rounded-lg">
            <Controller
                name="article"
                control={control}
                rules={{required: 'Обязательное поле'}}
                render={({field}) => (
                    <TextField {...field} type="text" placeholder="Артикул" label="Артикул" error={!!errors.article}
                               helperText={errors.article?.message}/>
                )}
            />
            <Controller
                name="title"
                control={control}
                rules={{required: 'Обязательное поле'}}
                render={({field}) => (
                    <TextField {...field} type="text" placeholder="Название" label="Название" error={!!errors.title}
                               helperText={errors.title?.message}/>
                )}
            />
            <FormControl fullWidth>
                <Controller
                    name="main_image"
                    control={control}
                    rules={{required: 'Изображение обязательно'}}
                    render={({field: {onChange, value, ...rest}}) => (
                        <>
                            <input
                                type="file"
                                id="main_image"
                                hidden
                                onChange={(e) => onChange(e.target.files?.[0])}
                                {...rest}
                            />
                            <label htmlFor="main_image">
                                {preview ? (
                                    <img src={preview}
                                         className="w-40 h-40 object-contain hover:cursor-pointer"
                                         alt="Заменить"/>
                                ) : (
                                    <Button variant="outlined" component="span">
                                        Загрузить изображение
                                    </Button>
                                )}
                            </label>
                            {errors.main_image && (
                                <span className="text-red-500">{errors.main_image.message}</span>
                            )}
                        </>
                    )}
                />
            </FormControl>
            <Button type="submit" variant="contained" color="success" disabled={isPending}>
                {isPending ? 'Сохранение...' : 'Сохранить'}
            </Button>
        </form>
    )
}

export default ProductForm