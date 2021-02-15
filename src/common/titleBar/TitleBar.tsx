import React from 'react';
import { PrimaryButton, SecondaryButton } from '../buttons';
import { TextInput } from '../form';
import styles from "./TitleBar.module.scss";

export const TitleBar = () => {
    return (
        <section className={styles.rootContainer}>
            <section className={styles.titleContainer}>
                <h1>Twitch Flights</h1>
            </section>
            <section className={styles.inputContainer}>
                <TextInput />
                <SecondaryButton label="Join Flights" style={{rootContainer: styles.secondaryButtonContainer}} />
                <PrimaryButton label="New Flight" />
            </section>
        </section>
    )
}