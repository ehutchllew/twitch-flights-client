import React from 'react';
import styles from './scss/BodyHeavy.module.scss'

interface IBodyHeavyProps {
    children: React.ReactChild;
    className?: string;
}

export const BodyHeavy = ({ children, className }: IBodyHeavyProps) => (
    <p className={`${styles.text} ${className}`}>{children}</p>
)