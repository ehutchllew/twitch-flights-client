import React from 'react';
import styles from "./scss/TextInput.module.scss";

interface ITextInputProps {
    placeholder?: string;
    value?: string;
}

export const TextInput = ( { placeholder, value }: ITextInputProps) => {
    return (
        <input className={styles.rootContainer} placeholder={placeholder} value={value} />
    )
}