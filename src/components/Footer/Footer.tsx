import React from 'react';
import s from './footer.module.css';

import twitterIcon from './assets/twitter-icon.svg';
import telegramIcon from './assets/telegram-icon.svg';
import redditIcon from './assets/reddit-icon.svg';
import mediumIcon from './assets/medium-icon.svg';
import youtubeIcon from './assets/youtube-icon.svg';
import discordIcon from './assets/discord-icon.svg';
import linkedinIcon from './assets/linkedin-icon.svg';
import githubIcon from './assets/github-icon.svg';

const socials = [
  {
    icon: twitterIcon,
    href: 'https://twitter.com/airdao_io',
  },
  {
    icon: telegramIcon,
    href: 'https://t.me/airdao',
  },
  {
    icon: redditIcon,
    href: 'https://www.reddit.com/r/AirDAO/',
  },
  {
    icon: mediumIcon,
    href: 'https://blog.airdao.io/',
  },
  {
    icon: youtubeIcon,
    href: 'https://www.youtube.com/c/AmbrosusEcosystem',
  },
  {
    icon: discordIcon,
    href: 'https://discord.gg/airdao',
  },
  {
    icon: linkedinIcon,
    href: 'https://www.linkedin.com/company/airdaoio',
  },
  {
    icon: githubIcon,
    href: 'https://github.com/ambrosus',
  },
];

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.links}>
        <a
          className={s.link}
          href='https://airdao.io/'
          target='_blank'
          rel='noreferrer'
        >
          About us
        </a>
        <a
          className={s.link}
          href='https://airdao.io/academy'
          target='_blank'
          rel='nofollow noreferrer'
        >
          Academy
        </a>
        <a
          className={s.link}
          href='https://airdao.io/contact-us'
          target='_blank'
          rel='noreferrer'
        >
          Contact us
        </a>
      </div>
      <div className={s.version}>Version 2.0</div>
      <div className={s.socials}>
        {socials.map(({ href, icon }, i) => (
          <a
            key={i}
            className={s.icon}
            href={href}
            target='_blank'
            rel='nofollow noreferrer'
          >
            <img src={icon} alt='icon' />
          </a>
        ))}
      </div>
    </footer>
  );
}
