import React from "react";
import style from "../core/css/index.module.scss";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../features/user/view/userApi";
import cn from "classnames";
import tel from "/tel.png";
import email from "/email.png";
import ButtonExit from "../core/ui/ButtonExit";
import ButtonBack from "../core/ui/ButtonBack";

const DetailUser: React.FC = () => {
  const { id } = useParams();
  let res;
  let details;

  if (id) {
    res = useGetUserByIdQuery(id);
    if (res.data) {
      details = res.data.data;
    }
  }

  return (
    <>
      {res?.isLoading && <h2>Loading</h2>}
      {details && (
        <div className={style.detailUser}>
         <div className={style.detailUser__header}>
          <div className={cn(style.detailUser__header, style.header, style.container)}>
            <ButtonBack />
            <div className={style.header__user}>
              <img src={details.avatar} alt="" />
              <div className={style.header__user__info}>
                <h1>
                  {details.first_name} {details.last_name}
                </h1>
                <p>Партнер</p>
              </div>
            </div>
            <ButtonExit />
          </div>
          </div>
          <div className={cn(style.detailUser__body, style.body, style.container)}>
            <div className={style.body__text}>
              <p>
                Клиенты видят в нем эксперта по вопросам разработки комплексных
                решений финансовых продуктов, включая такие аспекты, как
                организационная структура, процессы, аналитика и ИТ-компоненты.
                Он помогает клиентам лучше понимать структуру рисков их бизнеса,
                улучшать процессы за счет применения новейших технологий и
                увеличивать продажи, используя самые современные аналитические
                инструменты.
              </p>
              <p>
                {" "}
                В работе с клиентами недостаточно просто решить конкретную
                проблему или помочь справиться с трудностями. Не менее важно
                уделять внимание обмену знаниями: "Один из самых позитивных
                моментов — это осознание того, что ты помог клиенту перейти на
                совершенно новый уровень компетентности, уверенность в том, что
                после окончания проекта у клиента есть все необходимое, чтобы
                дальше развиваться самостоятельно".
              </p>
              <p>
                {" "}
                Помимо разнообразных проектов для клиентов финансового сектора,
                Сорин ведет активную предпринимательскую деятельность. Он
                является совладельцем сети клиник эстетической медицины в
                Швейцарии, предлагающей инновационный подход к красоте, а также
                инвестором других бизнес-проектов.
              </p>
            </div>
            <div className={style.body__contact}>
              <div>
                <img src={tel} alt="" />
                <p>+7 (954) 333-44-55</p>
              </div>
              <div>
                <img src={email} alt="" />
                <p>{details.email}</p>
              </div>

              <p></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DetailUser;
