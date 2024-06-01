import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom"
import App from "../App"
import { ModelS, Model3, ModelX, ModelY, Solar, SolarP } from "@pages";
const Index = ()=>{
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<ModelS />} />
                <Route path="model3" element={<Model3 />} />
                <Route path="modelx" element={<ModelX />} />
                <Route path="modely" element={<ModelY />} />
                <Route path="solar" element={<Solar />} />
                <Route path="solarp" element={<SolarP />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />
}
export default Index
