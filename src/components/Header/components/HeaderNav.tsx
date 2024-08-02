import React, { useRef, useState } from 'react';
import styles from '../Header.module.css';
import { asText } from '@prismicio/client';
import useClickOutside from '../../../hooks/useClickOutside';
import { HeaderNavProps } from '../Header.types';
import TailArrow from '../../Icons/TailArrow';
import ArrowRight from '../../Icons/ArrowRight';
import ArrowTail from '../../Icons/ArrowTail';

const HeaderNav = ({
  close,
  headerInfo,
  className,
  isOpen,
}: HeaderNavProps) => {
  const [activeList, setActiveList] = useState('');

  const ref = useRef(null);

  useClickOutside(
    ref,
    () => {
      close();
      setActiveList('');
    },
    isOpen,
  );

  const handleList = (key: string) => {
    setActiveList((state) => (state === key ? '' : key));
  };

  return (
    <div
      ref={ref}
      className={`${styles['nav-item-wrapper']} ${styles[className]}`}
    >
      <div className={styles['connected-nav__link-arrow']}>
        <a
          href={headerInfo?.amburl.url}
          className={styles['connected-nav__product']}
        >
          Get AMB
        </a>
        <TailArrow />
      </div>
      {headerInfo?.slices.map((el) => (
        <div
          className={`${styles['nav-item']} ${
            activeList === asText(el.primary.navlabel)
              ? styles['nav-item_active']
              : ''
          }`}
          key={asText(el.primary.navlabel)}
        >
          <span
            className={styles['nav-item__label']}
            onClick={() => handleList(asText(el.primary.navlabel))}
          >
            {asText(el.primary.navlabel)}
            <ArrowTail />
          </span>
          <div className={styles['nav-item__list-wrapper']}>
            <div
              className={`
                ${styles['nav-item__list']}
                ${
                  styles[
                    'nav-item__list_' +
                      asText(el.primary.navlabel)
                        .toLocaleLowerCase()
                        .replace(' ', '-')
                  ]
                }
              `}
            >
              <div className={styles['nav-item__list-container']}>
                {el.items.map((item) => (
                  <a
                    href={item.navitemlink.url || ''}
                    target={item.navitemlink.target || ''}
                    key={item.navitemlink.url}
                    className={styles['nav-item__list-item']}
                    {...(item.navitemimg.url.includes('https://airdao.io')
                      ? {}
                      : { rel: 'nofollow' })}
                  >
                    <img
                      src={item.navitemimg.url}
                      width='40'
                      height='40'
                      className={styles['nav-item__list-img']}
                      alt={asText(item.navitemlabel) || ''}
                    />
                    <div>
                      <p className={styles['nav-item__list-title']}>
                        {asText(item.navitemlabel)}
                        <ArrowRight />
                      </p>
                      {asText(item.navitemdescr) && (
                        <p className={styles['nav-item__list-descr']}>
                          {asText(item.navitemdescr)}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeaderNav;
