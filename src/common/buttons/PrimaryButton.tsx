import React from 'react';
import { BodyHeavy } from '../text';
import styles from './scss/PrimaryButton.module.scss';

interface IPrimaryButtonProps {
    label: string;
}

export const PrimaryButton = ({ label }: IPrimaryButtonProps) => {
    return <button className={styles.rootContainer}>
            <BodyHeavy>{label}</BodyHeavy>
        </button>
}