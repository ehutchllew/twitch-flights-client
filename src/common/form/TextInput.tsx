import React, { ChangeEvent } from 'react';
import styles from "./scss/TextInput.module.scss";

interface ITextInputProps {
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value?: string;
}

export const TextInput = ( { onChangeValue, placeholder, value }: ITextInputProps) => {
    return (
        <input className={styles.rootContainer} onChange={onChangeValue} placeholder={placeholder} value={value} />
    )
}