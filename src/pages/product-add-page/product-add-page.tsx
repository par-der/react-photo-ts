import ProductForm from "../../components/product-form/product-form.tsx";

const ProductAddPage = () => {
    return (
        <div className="w-full flex container mx-auto p-4 flex-col items-center justify-center gap-4">
            <article className="w-full flex items-center justify-center text-2xl font-semibold text-gray-600">Добавить
                продукт
            </article>
            <section className="max-w-3xl w-full flex items-center justify-center gap-4">
                <ProductForm/>
            </section>
        </div>
    )
}

export default ProductAddPage