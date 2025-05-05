import {RouterProvider} from "react-router";
import {router} from "./routes/router.tsx";
import {useAuthStore} from "./stores/auth-store.ts";
import {useEffect} from "react";
import {API_TOKEN_KEY} from "./constants/api.ts";

const App = () => {

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = API_TOKEN_KEY ? API_TOKEN_KEY : null;
                if (token) {
                    useAuthStore.setState({token, isAuthenticated: true});
                }
            } catch (error) {
                console.error("Error checking token:", error);
            }
        };
        checkToken();
    }, []);
    return <RouterProvider router={router}/>
}

export default App