import {useGetProductsQuery, useSearchProductsQuery} from "../../services/api/queries.ts";
import Product from "../../components/product/product.tsx";
import SearchInput from "../../components/search-input/search-input.tsx";
import {useEffect, useState} from "react";
import {useDebounce} from "@uidotdev/usehooks";
import {Button, Pagination} from "@mui/material";
import LoadingSpinner from "../../components/common/loading-spinner/loading-spinner.tsx";
import {useNavigate} from "react-router";
import {NAVIGATION_ROUTES} from "../../constants/routes.ts";

const HomePage = () => {
    const [page, setPage] = useState(1);
    //const [enabled, setEnabled] = useState(false);
    const [search, setSearch] = useState('');
    const debouncedSearchTerm = useDebounce(search, 150);
    const enabled = debouncedSearchTerm.trim().length > 0;
    const {data: products, isLoading, isError, error} = useGetProductsQuery({
        'page': String(page),
        //'search': debouncedSearchTerm
    });
    const {data: searchProducts, isLoading: isSearchLoading, isError: isSearchError, error: searchError} = useSearchProductsQuery(
        debouncedSearchTerm,
        enabled,
    );
    const navigate = useNavigate();
    const searchOptions: string[] = searchProducts?.results.map((product) => `${product.article} (${product.title})`) ?? [];
    // useEffect(() => {
    //     setPage(1);
    // }, [debouncedSearchTerm]);

    if (isError) {
        return <div>Error: {error?.message}</div>;
    }

    return (
        <div className="w-full flex flex-col gap-4 p-4 container mx-auto">
            <div className="w-full">
                {/*TODO добавить debounced*/}
                <SearchInput search={search} setSearch={setSearch} options={searchOptions} loading={isSearchLoading} />
            </div>
            <div className="w-full flex items-center border border-gray-200 gap-1.5 p-4 rounded-lg bg-neutral-50 ">
                <Button onClick={() => navigate(NAVIGATION_ROUTES.PRODUCTS_ADD)} variant="contained"
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