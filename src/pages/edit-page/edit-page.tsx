import { useParams } from 'react-router';
import EditForm from "../../components/edit-form/edit-form.tsx";
import {useProductById} from "../../services/api/queries.ts";
import LoadingSpinner from "../../components/common/loading-spinner/loading-spinner.tsx";

const EditPage = () => {
    const { id } = useParams();
    const {data: product, isPending, isError} = useProductById(id || '');

    if (isPending) {
        return (
            <LoadingSpinner />
        )
    }

    if (isError) {
        return (
            <div>ошибка</div>
        )
    }

    return (
        <div className="w-full flex container mx-auto p-4 flex-col items-center justify-center gap-4">
            <article className="w-full flex items-center justify-center text-2xl font-semibold text-gray-600">Изменить продукт
            </article>
            <section className="max-w-3xl w-full flex items-center justify-center gap-4">
                {product && <EditForm product={product} />}
            </section>
        </div>
    )
}

export default EditPage;