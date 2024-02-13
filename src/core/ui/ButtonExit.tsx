import React from "react";
import exit from "/exit.png";
import { setIsAuth } from "../../features/auth/authSlice";
import { useAppDispatch } from "../store/hook";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import style from "../../core/css/index.module.scss";

const ButtonExit: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handlelogOut = () => {
    localStorage.removeItem("token");
    dispatch(setIsAuth(false));
    navigate("/")
  };

  return (
    <div className={style.header__button} onClick={handlelogOut}>
      <Button className={style.btn}>
        <span>Выход</span>
      </Button>
      <img src={exit} alt="exit" />
    </div>
  );
};
export default ButtonExit;
