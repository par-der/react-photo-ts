import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";
import {ThemeProvider} from "@mui/material";
import {theme} from "./utils/theme.ts";

const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    },
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </QueryClientProvider>
    </StrictMode>,
)
