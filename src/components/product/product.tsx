import {IProduct} from "../../types/product.ts";

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
    return (
        <article
            key={product.id}
            className="flex flex-col justify-between border border-gray-200 rounded-xl bg-white
                shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
        >
            {/* Контент карточки */}
            <div className="p-4">
                {/* Изображение */}
                <div className="relative h-48 bg-gray-50 rounded-lg overflow-hidden mb-4 p-4">
                    {product.main_image ? (
                        <img
                            src={product.main_image}
                            alt={product.title}
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <span className="text-sm">No image</span>
                        </div>
                    )}
                </div>

                {/* Текстовый контент */}
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">{product.title}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                        <p className="truncate">
                            <span className="font-medium">Артикул:</span> {product.article}
                        </p>
                        <p>
                            <span className="font-medium">Версия:</span> {product.image_version}
                        </p>
                    </div>
                </div>
            </div>

            {/* Кнопки действий */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-xl">
                <div className="flex justify-between gap-2">
                    <button
                        className="flex-1 px-4 py-2 bg-neutral-600 hover:bg-neutral-700 text-white text-sm
                      font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                        </svg>
                        Изменить
                    </button>

                    <button
                        className="flex-1 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm
                      font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                        Удалить
                    </button>
                </div>
            </div>
        </article>
    )
}

export default Product