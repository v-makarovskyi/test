import React, { FC } from "react";

export const RegisterArea: FC = (): JSX.Element => {
  return (
    <section className="login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="login__wrapper">
              <header className="login__header">
                <h3 className="login__title">Зарегистрироваться в Ulta</h3>
                <p className="login__description">
                  Есть аккаунт?&nbsp;
                  <span>
                    <a href="/">Войти</a>
                  </span>
                </p>
              </header>
              <div className="login__body">
                <div className="login__email">
                  <p>или Зарегистрируйтесь по Email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
