import {IProduct, IProductRequest} from "../../types/product.ts";
import {useUpdateProductMutation} from "../../services/api/mutations.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {NAVIGATION_ROUTES} from "../../constants/routes.ts";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";

interface EditFormProps {
    product: IProduct
}

const EditForm = ({product}: EditFormProps) => {
    const {control, register, handleSubmit, reset, watch, formState: {errors}, setError, setValue} = useForm<IProductRequest>(
        {
            defaultValues: {
                article: '',
                title: '',
                main_image: null,
            },
        },
    );
    const {mutate, isPending} = useUpdateProductMutation();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IProductRequest> = async ({article, title, main_image}) => {
        const formData = new FormData();
        formData.append('article', article);
        formData.append('title', title);
        if (main_image) {
            formData.append('main_image', main_image);
        }
        mutate (
            {id: String(product.id), payload: formData},
            {
                onSuccess: () => {
                    toast.success("Успех");
                    navigate(NAVIGATION_ROUTES.HOME)
                },
                onError: () => toast.error('Не удалось сохранить изменение'),
            }
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <input type="text" placeholder="Артикул" {...register("article")} className="border p-2 rounded"/>
            {errors.article && <span className="text-red-500">{errors.article.message}</span>}

            <input type="text" placeholder="Описание" {...register("title")} className="border p-2 rounded"/>
            {errors.title && <span className="text-red-500">{errors.title.message}</span>}

            <input type="file" placeholder="Фотография" onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                if (file) {
                    setValue("main_image", file);
                } else {
                    setValue("main_image", null);
                }
            }} className="border p-2 rounded"/>
            {errors.main_image && <span className="text-red-500">{errors.main_image.message}</span>}

            <button type="submit" disabled={isPending} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">{isPending ? "Сохранение" : "Сохранить"}</button>
        </form>
    )
}

export default EditForm