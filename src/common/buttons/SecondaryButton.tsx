import React from 'react';
import { BodyHeavy } from '../text';
import styles from './scss/SecondaryButton.module.scss';

interface ISecondaryButtonStyles {
    label: string;
    rootContainer: string;
}

interface ISecondaryButtonProps {
    label: string;
    onClick: () => void;
    style?: Partial<ISecondaryButtonStyles>;
}

export const SecondaryButton = ({ label, onClick, style }: ISecondaryButtonProps) => {
    return (
    <button className={`${styles.rootContainer} ${style?.rootContainer}`} onClick={onClick}>
        <BodyHeavy className={styles.label}>{label}</BodyHeavy>
    </button>
    );
}