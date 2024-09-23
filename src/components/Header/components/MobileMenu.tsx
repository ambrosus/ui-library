import React, { useRef } from 'react';
import s from '../Header.module.css';
import useClickOutside from '../../../hooks/useClickOutside';
import { MobileMenuProps } from '../Header.types';
import { PrismicImage, PrismicText } from '@prismicio/react';
import { asText } from '@prismicio/client';
// import airdaoIcon from '../assets/airdao.svg';
import TailArrow from '../../Icons/TailArrow';

export function MobileMenu({ close, isOpen, data }: MobileMenuProps) {
  const ref = useRef(null);
  useClickOutside(ref, close, isOpen);

  const isActive = (productName: string) => {
    return window.location.pathname
      .replace(/\/+/g, '')
      .includes(productName.toLowerCase().replace(/\s+/g, '-'));
  };
  return (
    <>
      <div className={s['mobile-menu']} ref={ref}>
        <div className={s['connected-nav__link-arrow']}>
          <a href='/' className={s['connected-nav__product']}>
            Get AMB
          </a>
          <TailArrow />
        </div>
        {data?.products?.map((product) => (
          <a
            key={asText(product.name)}
            href={product?.url}
            className={`${s['mobile-menu__link']} ${
              isActive(asText(product.name))
                ? s['mobile-menu__link_active']
                : ''
            }`}
          >
            <PrismicText field={product.name} />
          </a>
        ))}

        {data?.submenus?.map((submenu) => (
          <div className={s['mobile-menu__sublist']} key={asText(submenu.name)}>
            <div className={s['mobile-menu__sublist-name']}>
              <PrismicText field={submenu.name} />
            </div>
            <div className={s['mobile-menu__sublist-content']}>
              {submenu.content.map((item) => (
                <a
                  href={item.url}
                  target={item.target}
                  key={item.name}
                  className={s['mobile-menu__sublist-link']}
                >
                  <PrismicText field={item.name} />
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className={s['mobile-menu__divider']} />
        <div className={s['mobile-menu__socials']}>
          <div className={s['mobile-menu__socials-name']}>Community</div>
          <div className={s['mobile-menu__socials-content']}>
            {data?.socials?.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target={social.target}
                rel='nofollow'
                className={s['mobile-menu__socials-link']}
              >
                <PrismicImage
                  field={social.img}
                  className={s['mobile-menu__social-img']}
                  alt={social.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
