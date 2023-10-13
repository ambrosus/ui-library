import React, {useRef} from 'react';
import s from "../Header.module.css";
import useClickOutside from "../../../hooks/useClickOutside";
import {MobileMenuProps} from "../Header.types";
import {PrismicImage, PrismicLink, PrismicText} from "@prismicio/react";
import { asText } from "@prismicio/client";
import airdaoIcon from "../assets/airdao.svg";

export function MobileMenu ({ close, isOpen, data, balance }: MobileMenuProps) {
  const ref = useRef(null);
  useClickOutside(ref, close, isOpen);

  const isActive = (productName) => {
    return window.location.pathname.includes(productName.toLowerCase());
  }
  return (
    <div className={s['mobile-menu']} ref={ref}>
      <div className={s['mobile-menu__balance']}>
        <img
          src={airdaoIcon}
          width="30"
          height="30"
          alt="airdao-icon"
        />
        <span>{balance} AMB</span>
      </div>
      <div className={s['mobile-menu__divider']} />
      {data && data.products.map((product) => (
        <a href={product?.url} className={`${s['mobile-menu__link']} ${isActive(asText(product.name)) ? s['mobile-menu__link_active'] : ''}`}>
          <PrismicText field={product.name} />
        </a>
      ))}

      {data && data.submenus.map((submenu) => (
        <div className={s['mobile-menu__sublist']}>
          <div className={s['mobile-menu__sublist-name']}>
            <PrismicText field={submenu.name} />
          </div>
          <div className={s['mobile-menu__sublist-content']}>
            {submenu.content.map((item) => (
              <a href={item.url} target={item.target} key={item.name} className={s['mobile-menu__sublist-link']}>
                <PrismicText field={item.name} />
              </a>
            ))}
          </div>
        </div>
      ))}

      <div className={s['mobile-menu__divider']} />
      <div className={s['mobile-menu__socials']}>
        <div className={s['mobile-menu__socials-name']}>
          Community
        </div>
        <div className={s['mobile-menu__socials-content']}>
          {data && data.socials.map((social) => (
            <a href={social.url} target={social.target} className={s['mobile-menu__socials-link']}>
              <PrismicImage field={social.img} className={s['mobile-menu__social-img']} />
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}
