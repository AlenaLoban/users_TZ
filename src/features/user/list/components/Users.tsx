import React, { useState, useEffect } from "react";
import { useGetUsersQuery } from "../usersApi";
import User from "../../view";
import { IUser } from "../../../../core/types/userType";
import style from "../css/users.module.scss";
import Button from "../../../../core/ui/Button";
import arrow from "/arrow.png";
import { useSearchParams } from "react-router-dom";

const Users: React.FC = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, isError } = useGetUsersQuery({ page });

  useEffect(() => {
    setSearchParams({
      page: page.toString(),
    });
  }, [page]);

  useEffect(() => {
    const pageParams = searchParams.get("page");

    if (!pageParams) {
      setPage(1);
      return;
    }
    setPage(parseInt(pageParams));
  }, []);

  return (
    <div className={style.users}>
      <div className={style.box}>
        {isError && <h3>Server error</h3>}
        {isLoading && <h3>Loading</h3>}
        {data?.data &&
          data?.data.map((user: IUser) => <User key={user.id} {...user} />)}
      </div>

      {data && data.total !== data.data.length && (
        <div className={style.users__button}>
          <Button
            className={style.users__button__btn}
            onClick={() => setPage(page + 1)}
          >
            <div>
              <p>Показать ещё</p> <img src={arrow} alt="arrow" />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};
export default Users;
