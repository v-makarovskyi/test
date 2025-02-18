import React, { FC, useState } from "react";
import * as YUP from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { OpenEye } from "../../svg/open-eye";
import { CloseEye } from "../../svg/close-eye";
import { ErrorMsg } from "../common/error-msg";

type Inputs = {
  name: string;
  email: string;
  password: string;
  remember: boolean;
};

const schema = YUP.object().shape({
  name: YUP.string()
    .matches(/^([a-zA-Z'-]{0,50}|[а-яА-ЯёЁ'-]{0,21})$/, {
      excludeEmptyString: false,
      message: `Допустимы символы [a-z, A-z], [а-я, А-Я], [',-]. Не более 21 символов`,
    })
    .required("Name - обязательное поле. Повторите попытку.")
    .max(21),
  email: YUP.string()
    .email("Вы должны предоставить действительный email")
    .required("Email - обязательное поле. Повторите попытку."),
  password: YUP.string()
    .min(6, "Пароль должен содержать не менее 6 символов")
    .required(),
  remember: YUP.boolean()
    .required()
    .oneOf(
      [true],
      "Вы должны принять условия Сервиса и Политики конфиденциальности."
    ),
});

export const RegisterForm: FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: { name: "", email: "", password: "", remember: false },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      className="login__form"
      id="login-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="login__form-input-box-wrapper">
        <div className="login__form-input-box">
          <input
            className="login__form-input input"
            {...register("name", {
              required: "Name - обязательное поле. Повторите попытку.",
              pattern: {
                value: /^([a-zA-Z'-]{0,50}|[а-яА-ЯёЁ'-]{0,21})$/,
                message: `Допустимы символы [a-z, A-z], [а-я, А-Я], [',-]. Не более 21 символов`,
              },
            })}
            id="name"
            name="name"
            placeholder="Vladimir Makarovskyi"
            type="text"
          />
          <label className="login__form-title" htmlFor="name">
            Your name*
          </label>
          <ErrorMsg msg={errors.name?.message} />
        </div>
        <div className="login__form-input-box">
          <input
            className="login__form-input  input"
            {...register("email")}
            id="email"
            name="email"
            placeholder="makarovskyi.v@gmail.com"
            type="email"
          />
          <label className="login__form-title" htmlFor="email">
            Your email*
          </label>
          <ErrorMsg msg={errors.email?.message} />
        </div>
        <div className="login__form-input-box">
          <input
            className="login__form-input input"
            {...register("password", {
              required: "Password - обязательное поле. Повторите попытку.",
            })}
            id="password"
            name="password"
            placeholder="min 6 character"
            type={showPassword ? "text" : "password"}
          />
          <div className="login__form-eye" id="password-show-toggle">
            <span
              className="login__form-open-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <CloseEye /> : <OpenEye />}
            </span>
          </div>
          <label className="login__form-title" htmlFor="password">
            Enter password*
          </label>
          <ErrorMsg msg={errors.password?.message} />
        </div>
      </div>
      <fieldset className="login__form-remember" id="login-form">
        <legend className="visually-hidden">
          accept the terms of the Service{" "}
        </legend>
        <label>
          <input
            className="login__form-remember-checkbox visually-hidden"
            {...register("remember", {
              required:
                "Необходимо принять условия Сервиса и Политики конфиденциальности.",
            })}
            type="checkbox"
            id="remember"
            name="remember"
          />
          <span className="login__form-remember-emulator"></span>
          <span className="login__form-remember-title">
            I accept the terms of the Service & <a href="/">Privacy Policy</a> .
          </span>
        </label>
        <ErrorMsg msg={errors.remember?.message} />
      </fieldset>
      <button
        className="login__button button"
        type="submit"
        disabled={!isDirty}
      >
        Зарегистрироваться
      </button>
    </form>
  );
};
