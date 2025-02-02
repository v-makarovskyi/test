import React, { FC } from "react";
import { PhoneTwo } from "../../svg/phoneTwo";
import { Facebook } from "../../svg/facebook";
import { HeaderTopRight } from "./header-parts/header-top-right";

export const Header: FC = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__top d-none d-md-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="header__top-info">
                  <ul className="header__top-info-list">
                    <li className="header__top-info-item">
                      <a className="header__top-info-link" href="/">
                        <span className="visually-hidden">header info</span>
                        <Facebook />
                        <span className="header__top-info-part">
                          6600K followers
                        </span>
                      </a>
                    </li>
                    <li className="header__top-info-item">
                      <a
                        className="header__top-info-link"
                        href="tel:12345678899"
                      >
                        <span className="visually-hidden">
                          header info phone
                        </span>
                        <PhoneTwo />
                        <span className="header__top-info-part">
                          +(1)-234-567-88-99
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="header__top-right">
                  <HeaderTopRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom"></div>
      </div>
    </header>
  );
};
