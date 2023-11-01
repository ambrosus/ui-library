import React from 'react';
import s from '../notification.module.css'

export function Content({ message, description }: ContentProps) {
    return (
        <div className={s.content}>
          {message && <h6 className={s.heading}>{message}</h6>}
          {description && <p className={s.description}>{description}</p>}
        </div>
    )
}

interface ContentProps {
    message: React.ReactNode;
    description: React.ReactNode;
}
