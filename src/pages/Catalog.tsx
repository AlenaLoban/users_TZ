import React from "react";
import Users from "../features/user/list/components/Users";
import style from "../core/css/index.module.scss";
import cn from "classnames"

import ButtonExit from "../core/ui/ButtonExit";

const Catalog: React.FC = () => {
  return (
    <div className={style.catalog}>
      <div className={style.catalog__hd}>
         <div className={style.catalog__header}>
         <div className={style.catalog__header__info__button}>
            <ButtonExit />
         </div>
         <div className={style.catalog__header__info}>
            <h1>Наша команда</h1>
            <h2>
               Это опытные специалисты, хорошо разбирающиеся во всех задачах,
               которые ложатся на их плечи, и умеющие находить выход из любых, даже
               самых сложных ситуаций.
            </h2>
         </div>
         </div>
      </div>
      <div className={cn(style.catalog__content, style.container)}>
        <Users />
      </div>
    </div>
  );
};
export default Catalog;
