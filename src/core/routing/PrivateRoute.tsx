import { useEffect } from "react";
import { selectIsAuth } from "../../features/auth/authSlice";
import { useAppSelector } from "../store/hook";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children?: React.ReactNode }) => {
  const isAuth = useAppSelector(selectIsAuth);
  const navigate = useNavigate();
  const isToken = localStorage.getItem('token')

  useEffect(() => {
    if (!isAuth && !isToken) {
      navigate("/");
    }
  }, [isAuth]);
  return <>{children}</>;
};
export default PrivateRoute;
