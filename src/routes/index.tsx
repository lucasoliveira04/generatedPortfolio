import { UserPage } from "@/pages/userPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/user"
                    element={<UserPage/>}
                />

                <Route
                    path="*"
                    element={<UserPage />}
                />
            </Routes>
        </BrowserRouter>
    )
}