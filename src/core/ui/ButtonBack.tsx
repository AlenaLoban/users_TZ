import React from "react";
import Button from "./Button";
import back from "/back.png";
import { useNavigate } from "react-router-dom";
import style from "../css/index.module.scss"; 

const ButtonBack: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  
  return (
    <div className={style.header__button} onClick={() => goBack()}>
      <Button className={style.btn}>
        <span>Назад</span>
      </Button>
      <img src={back} alt="back" />
    </div>
  );
};
export default ButtonBack;
