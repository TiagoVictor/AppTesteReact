import {
    BrowserRouter, Routes, Route
} from "react-router-dom";
import { Dashboard, WriteNowPage } from "../components/pages";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/escrever-agora" element={<WriteNowPage />}/>
            </Routes>
        </BrowserRouter>
    );
}