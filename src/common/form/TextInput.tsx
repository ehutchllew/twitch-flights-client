import React from 'react';
import styles from "./scss/TextInput.module.scss";

interface ITextInputProps {
    value?: string;
}

export const TextInput = ( { value }: ITextInputProps) => {
    return (
        <input className={styles.rootContainer}  value={value} />
    )
}