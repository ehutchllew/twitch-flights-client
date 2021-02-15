import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BodyHeavy } from '../text';
import styles from './scss/PrimaryButton.module.scss';

interface IPrimaryButtonProps {
    label: string;
    leadingIconName?: IconDefinition;
    onClick: () => void;
    trailingIconName?: IconDefinition;
}

export const PrimaryButton = ({ label, leadingIconName, onClick, trailingIconName }: IPrimaryButtonProps) => {
    return <button className={styles.rootContainer} onClick={onClick}>
            {!!leadingIconName && <FontAwesomeIcon icon={leadingIconName} style={{marginRight: 5}} />}
            <BodyHeavy>{label}</BodyHeavy>
            {!!trailingIconName && <FontAwesomeIcon icon={trailingIconName} style={{marginLeft: 5}} />}
        </button>
}