import {useGetProductsQuery} from "../../services/api/queries.ts";
import Product from "../../components/product/product.tsx";
import SearchInput from "../../components/search-input/search-input.tsx";
import {useState} from "react";
import {Button, Pagination} from "@mui/material";
import LoadingSpinner from "../../components/common/loading-spinner/loading-spinner.tsx";
import {useNavigate} from "react-router";
import {NAVIGATION_ROUTES} from "../../constants/routes.ts";

const HomePage = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const {data: products, isLoading, isError, error} = useGetProductsQuery({'page': String(page), 'search': search});
    const navigate = useNavigate();


    if (isError) {
        return <div>Error: {error?.message}</div>;
    }

    return (
        <div className="w-full flex flex-col gap-4 p-4 container mx-auto">
            <div className="w-full">
                <SearchInput search={search} setSearch={setSearch}/>
            </div>
            <div className="w-full flex items-center border border-gray-200 p-4 rounded-lg bg-neutral-50 ">
                <Button onClick={() => navigate(NAVIGATION_ROUTES.PRODUCTS_ADD)} variant="outlined" color="success"
                        size="small"
                        startIcon={<span className="material-symbols-outlined">+</span>}>
                    Добавить
                </Button>
            </div>
            <>
                {isLoading && <LoadingSpinner/>}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {products?.results.map((product) => (
                        <Product product={product} key={product.id}/>
                    ))}
                    <div className="w-full"></div>
                </section>
                <div className="w-full flex justify-center">
                    <Pagination
                        count={Math.ceil((products?.count ?? 1) / 50)}
                        page={page}
                        onChange={(event, page) => setPage(page)}
                    />
                </div>
            </>
        </div>
    )
}

export default HomePage