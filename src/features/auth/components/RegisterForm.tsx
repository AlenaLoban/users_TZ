import Input from "../../../core/ui/Input";
import style from "./css/registr.module.scss";
import cn from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";
import hidePass from "/hidePass.png";
import Button from "../../../core/ui/Button";
import React, { useState } from "react";
import { setIsAuth } from "../authSlice";
import { useAppDispatch } from "../../../core/store/hook";
import { createRegUser } from "../utils/authValidation";
import { useNavigate } from "react-router-dom";

export type Inputs = {
  name: string;
  email: string;
  password: string;
  conf_password: string;
};

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  const dispatch = useAppDispatch();
  
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = ({ conf_password, ...data }) => {
    if (createRegUser(data)) {
      dispatch(setIsAuth(true));
      reset();
      navigate("/catalog");
    }
  };

  return (
    <div className={style.regestration}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(style.regestration__card, style.card)}
      >
        <div className={style.card__body}>
          <div className={style.boxInput}>
            <label>Имя</label>
            <Input
              className={cn(
                style.boxInput__input,
                errors.name ? style.boxInput__input__error : ""
              )}
              {...register("name", {
                required: "Поле обязательно для заполнения",
                validate: {
                  minLength: (v) =>
                    v.length >= 2 || "Имя должно быть не менее 2",
                  matchPattern: (v) =>
                    /^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/.test(
                      v
                    ) || "Можно использовать только латинские буквы",
                },
              })}
            />
            <div className={style.boxInput__error}>{errors.name?.message}</div>
          </div>
          <div className={style.boxInput}>
            <label>Электронная почта</label>
            <Input
              className={cn(
                style.boxInput__input,
                errors.email ? style.boxInput__input__error : ""
              )}
              {...register("email", {
                required: "Поле обязательно для заполнения",
                validate: {
                  matchPattern: (v) =>
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                      v
                    ) || "Введите валидный email",
                },
              })}
            />
            <div className={style.boxInput__error}>{errors.email?.message}</div>
          </div>
          <div className={style.boxInput}>
            <label>Пароль</label>
            <Input
              type={showPass ? "text" : "password"}
              className={cn(
                style.boxInput__input,
                errors.password ? style.boxInput__input__error : ""
              )}
              {...register("password", {
                required: "Поле обязательно для заполнения",
                validate: {
                  minLength: (v) =>
                    v.length >= 8 ||
                    "Пароль должен содержать не менее 8 символов",
                  matchPattern: (v) =>
                    /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(v) ||
                    "Пароль должен содержать хотя бы одну латинскую букву и одну цифру",
                },
              })}
            />
            <img
              onClick={() => setShowPass(!showPass)}
              className={style.boxInput__img_pass}
              src={hidePass}
              alt="hide password"
            />
            <div className={style.boxInput__error}>
              {errors.password?.message}
            </div>
          </div>
          <div className={style.boxInput}>
            <label>Подтвердите пароль</label>
            <Input
              type={showConfPass ? "text" : "password"}
              className={cn(
                style.boxInput__input,
                errors.conf_password ? style.boxInput__input__error : ""
              )}
              {...register("conf_password", {
                required: "Поле обязательно для заполнения",
                validate: {
                  minLength: (v) =>
                    v === getValues("password") || "Пароль должен совпадать",
                },
              })}
            />
            <img
              onClick={() => setShowConfPass(!showConfPass)}
              className={style.boxInput__img_confPass}
              src={hidePass}
              alt="hide password"
            />
            <div className={style.boxInput__error}>
              {errors.conf_password?.message}
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className={style.card__body__submit}
          disabled={!isValid}
        >
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};
export default RegisterForm;
