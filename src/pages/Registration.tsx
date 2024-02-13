import React, { useState } from "react";
import RegisterForm from "../features/auth/components/RegisterForm";
import style from "../core/css/index.module.scss";
import cn from "classnames";
import LoginForm from "../features/auth/components/LoginForm";

const Regestration: React.FC = () => {
  const [showLog, setShowLog] = useState(false);
  
  return (
    <div className={style.regPage}>
      <div className={cn(style.regPage__card, style.card)}>
        <div className={style.card__header}>
          <div
            className={cn(
              style.card__header__reg,
              showLog ? style.notActive : ""
            )}
            onClick={() => setShowLog(false)}
          >
            Pегистрация
          </div>
          <div
            className={cn(
              style.card__header__log,
              showLog ? "" : style.notActive
            )}
            onClick={() => setShowLog(true)}
          >
            Вход
          </div>
        </div>
        <div className={style.card__body}>
          {showLog ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};
export default Regestration;
