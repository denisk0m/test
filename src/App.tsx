import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProductListView} from "./views/ProductListView/ProductListView.tsx";
import {ProductView} from "./views/ProductView/ProductView.tsx";
import {StoreProvider} from "./store/StoreProvider.tsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <StoreProvider>
                    <Routes>
                        <Route path="/products" element={<ProductListView/>}/>
                        <Route path="/products/:id" element={<ProductView/>}/>
                    </Routes>
                </StoreProvider>
            </BrowserRouter>
        </>
    )
}

export default App
