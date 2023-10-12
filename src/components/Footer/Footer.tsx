import React from 'react';
import {FooterProps} from "./Footer.types";
import s from './footer.module.css'

import twitterIcon from './assets/twitter-icon.svg'
import telegramIcon from './assets/telegram-icon.svg'
import redditIcon from './assets/reddit-icon.svg'
import mediumIcon from './assets/medium-icon.svg'
import youtubeIcon from './assets/youtube-icon.svg'
import discordIcon from './assets/discord-icon.svg'
import linkedinIcon from './assets/linkedin-icon.svg'

const socials = [
  {
    icon: twitterIcon,
    href: 'https://twitter.com',
  },
  {
    icon: telegramIcon,
    href: 'https://telegram.com',
  },
  {
    icon: redditIcon,
    href: 'https://reddit.com',
  },
  {
    icon: mediumIcon,
    href: 'https://medium.com',
  },
  {
    icon: youtubeIcon,
    href: 'https://youtube.com',
  },
  {
    icon: discordIcon,
    href: 'https://discord.com',
  },
  {
    icon: linkedinIcon,
    href: 'https://linkedin.com',
  }
]

export function Footer(props: FooterProps) {
  return (
    <footer className={s.footer}>
      <div className={s.links}>
        <a
          className={s.link}
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          About us
        </a>
        <a
          className={s.link}
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
        <a
          className={s.link}
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          FAQs
        </a>
      </div>
      <div className={s.version}>Version 2.0</div>
      <div className={s.socials}>
        {socials.map(({href, icon}, i) => (
          <a
            key={i}
            className={s.icon}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <img src={icon} alt="icon"/>
          </a>
        ))}
      </div>
    </footer>
  );

}
