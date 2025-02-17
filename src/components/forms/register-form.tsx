import React, { FC } from "react";
import { OpenEye } from "../../svg/open-eye";
import { CloseEye } from "../../svg/close-eye";

export const RegisterForm: FC = (): JSX.Element => {
  return (
    <form className="login__form" id="login-form">
      <div className="login__form-input-box-wrapper">
        <div className="login__form-input-box">
          <div className="login__form-field">
            <input
              className="login__form-input input"
              id="name"
              name="name"
              placeholder="Vladimir Makarovskyi"
              type="text"
            />
          </div>
          <div className="login__form-title">
            <label htmlFor="name">Your name</label>
          </div>
        </div>
        <div className="login__form-input-box">
          <div className="login__form-field">
            <input
              className="login__form-input  input"
              id="email"
              name="email"
              placeholder="makarovskyi.v@gmail.com"
              type="email"
            />
          </div>
          <div className="login__form-title">
            <label htmlFor="name">Your email</label>
          </div>
        </div>
        <div className="login__form-input-box login__form-input-box--relative ">
          <div className="login__form-field">
            <input
              className="login__form-input input"
              id="password"
              name="password"
              placeholder="min 6 character"
              type="password"
            />
          </div>
          <div className="login__form__eye" id="password-show-toggle">
            <span className="login__form-open-eye">
              <CloseEye />
            </span>
          </div>
          <div className="login__form-title">
            <label htmlFor="name">Enter password</label>
          </div>
        </div>
      </div>
      <fieldset className="login__remember">
        <legend className="visually-hidden">
          accept the terms of the Service{" "}
        </legend>
        <label htmlFor="remember">
          <input
            className="login__remember-checkbox visually-hidden"
            type="checkbox"
            id="remember"
            name="remember"
          />
          <span className="login__emulator"></span>
          <span className="login__remember-title">
            I accept the terms of the Service & <a href="/">Privacy Policy</a> .
          </span>
        </label>
      </fieldset>
      <button className="login__button button" type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};
