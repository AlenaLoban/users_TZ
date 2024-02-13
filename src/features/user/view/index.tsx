import React, { useState } from "react";
import { IUser } from "../../../core/types/userType";
import styles from "./css/user.module.scss";
import notLike from "/notLike.png";
import like from "/like.png";
import { useNavigate } from "react-router-dom";

const User: React.FC<IUser> = (props) => {
  const [isLike, setIsLike] = useState(false);
  const { avatar, first_name, last_name, id } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog/${id}`);
    window.scroll(0, 0);
  };
  const handleSetLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__body} onClick={handleClick}>
        <img src={avatar} alt="avatar" />
        <h2>
          {first_name} {last_name}
        </h2>
      </div>
      <div className={styles.card__like} onClick={handleSetLike}>
        <img src={isLike ? like : notLike} alt="like" />
      </div>
    </div>
  );
};
export default User;
