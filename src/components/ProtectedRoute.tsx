import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
    const isAuth = localStorage.getItem("isAuthenticated");

    return isAuth === "true" ? children : <Navigate to="/signup" />;
};

export default ProtectedRoute;