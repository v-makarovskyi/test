import React, { FC } from "react";

export const RegisterForm: FC = (): JSX.Element => {
  return (
    <form className="login__form register-login-form">
      <div className="register-login-form__input-box-wrapper">
        <div className="register-login-form__input-box">
          <div className="register-login-form__input">
            <input
              className="input"
              id="name"
              name="name"
              placeholder="Vladimir Makarovskyi"
              type="text"
            />
          </div>
          <div className="register-login-form__title">
            <label htmlFor="name">Your name</label>
          </div>
        </div>
        <div className="register-login-form__input-box">
          <div className="register-login-form__input">
            <input
              className="input"
              id="email"
              name="email"
              placeholder="makarovskyi.v@gmail.com"
              type="email"
            />
          </div>
          <div className="register-login-form__title">
            <label htmlFor="name">Your email</label>
          </div>
        </div>
        <div className="register-login-form__input-box">
          <div className="register-login-form__input">
            <input
              className="input"
              id="password"
              name="password"
              placeholder="min 6 character"
              type="password"
            />
          </div>
          <div className="register-login-form__title">
            <label htmlFor="name">Enter password</label>
          </div>
        </div>
      </div>
    </form>
  );
};
