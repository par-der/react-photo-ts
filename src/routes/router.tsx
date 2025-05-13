import {createBrowserRouter} from "react-router";
import {ProtectedRoute} from "./protected-route.tsx";
import {lazy, Suspense} from "react";
import {NAVIGATION_ROUTES} from "../constants/routes.ts";
import LoadingSpinner from "../components/common/loading-spinner/loading-spinner.tsx";

const HomePage = lazy(() => import("../pages/home-page/home-page.tsx"))
const LoginPage = lazy(() => import("../pages/login-page/login-page.tsx"))
const ProductAddPage = lazy(() => import("../pages/product-add-page/product-add-page.tsx"))
const EditPage = lazy(() => import("../pages/edit-page/edit-page.tsx"))

export const router = createBrowserRouter(
    [
        {
            element: <ProtectedRoute/>,
            children: [
                {
                    path: NAVIGATION_ROUTES.HOME,
                    element: (
                        <Suspense fallback={<LoadingSpinner/>}>
                            <HomePage/>
                        </Suspense>
                    )
                },
                {
                    path: NAVIGATION_ROUTES.PRODUCTS_ADD,
                    element: (
                        <Suspense fallback={<LoadingSpinner/>}>
                            <ProductAddPage/>
                        </Suspense>
                    )
                },
                {
                    path: NAVIGATION_ROUTES.PRODUCTS_EDIT,
                    element: (
                        <Suspense fallback={<LoadingSpinner/>}>
                            <EditPage/>
                        </Suspense>
                    )
                }
            ]
        },
        {
            path: NAVIGATION_ROUTES.LOGIN,
            element: <LoginPage/>
        }
    ]
)