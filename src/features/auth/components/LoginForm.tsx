import style from "./css/registr.module.scss";
import cn from "classnames";
import Input from "../../../core/ui/Input";
import Button from "../../../core/ui/Button";
import React from "react";
import { checkUser } from "../utils/authValidation";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { setIsAuth } from "../authSlice";
import { useAppDispatch } from "../../../core/store/hook";

export type InputsLog = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<InputsLog>({
    mode: "onChange",
  });
  
  const onSubmit: SubmitHandler<InputsLog> = (data) => {
    if (checkUser(data)) {
      dispatch(setIsAuth(true));
      navigate("/catalog");
      reset();
    } else {
      alert("Проверьте заполнение данных. Такого пользователя не существует");
    }
  };

  return (
    <div className={style.regestration}>
      <form
        className={cn(style.regestration__card, style.card)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={style.card__body}>
          <div className={style.boxInput}>
            <label>Почта</label>
            <Input
              type="text"
              className={style.boxInput__input}
              {...register("email")}
            />
          </div>
          <div className={style.boxInput}>
            <label>Пароль</label>
            <Input
              type="password"
              className={style.boxInput__input}
              {...register("password")}
            />
          </div>
        </div>
        <Button
          className={style.card__body__submit}
          type="submit"
          disabled={!isValid}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};
export default LoginForm;
