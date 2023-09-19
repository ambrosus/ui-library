import React, {useRef} from 'react';
import s from "../Header.module.css";
import useClickOutside from "../../../hooks/useClickOutside";
import {MobileMenuProps} from "../Header.types";
import {PrismicImage, PrismicLink, PrismicText} from "@prismicio/react";

export function MobileMenu ({ close, isOpen, data }: MobileMenuProps) {

  const ref = useRef(null);
  useClickOutside(ref, close, isOpen);

  return (
    <div className={s['mobile-menu']} ref={ref}>
      {data && data.products.map((product) => (
        <PrismicLink field={product.url} className={s['mobile-menu__link']}>
          <PrismicText field={product.name} />
        </PrismicLink>
      ))}

      {data && data.submenus.map((submenu) => (
        <div className={s['mobile-menu__sublist']}>
          <div className={s['mobile-menu__sublist-name']}>
            <PrismicText field={submenu.name} />
          </div>
          <div className={s['mobile-menu__sublist-content']}>
            {submenu.content.map((item) => (
              <a href="https://google.com" className={s['mobile-menu__sublist-link']}>
                <PrismicText field={item.name} />
              </a>
            ))}
          </div>
        </div>
      ))}

      {/*{submenu.content.map((item) => (*/}
      {/*  <PrismicLink field={item.url} className={s['mobile-menu__sublist-link']}>*/}
      {/*    <PrismicText field={item.name} />*/}
      {/*  </PrismicLink>*/}
      {/*))}*/}

      <div className={s['mobile-menu__divider']} />
      <div className={s['mobile-menu__socials']}>
        <div className={s['mobile-menu__socials-name']}>
          Community
        </div>
        <div className={s['mobile-menu__socials-content']}>
          {data && data.socials.map((social) => (
            <a className={s['mobile-menu__socials-link']}>
              <PrismicImage field={social.img} className={s['mobile-menu__social-img']} />
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}
