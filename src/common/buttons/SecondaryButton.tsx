import React from 'react';
import { BodyHeavy } from '../text';
import styles from './scss/SecondaryButton.module.scss';

interface ISecondaryButtonStyles {
    label: string;
    rootContainer: string;
}

interface ISecondaryButtonProps {
    style?: Partial<ISecondaryButtonStyles>;
    label: string;
}

export const SecondaryButton = ({ label, style }: ISecondaryButtonProps) => {
    return (
    <button className={`${styles.rootContainer} ${style?.rootContainer}`}>
        <BodyHeavy className={styles.label}>{label}</BodyHeavy>
    </button>
    );
}