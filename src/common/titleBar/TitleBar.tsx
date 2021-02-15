import React, { ChangeEvent, useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../buttons';
import { TextInput } from '../form';
import styles from "./TitleBar.module.scss";
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

export const TitleBar = () => {
    const [flightNumber, setFlightNumber] = useState("");

    function onChangeFlightNumber(e: ChangeEvent<HTMLInputElement>){
        setFlightNumber(e.target.value);
    }

    return (
        <section className={styles.rootContainer}>
            <section className={styles.titleContainer}>
                <h1>Twitch Flights</h1>
            </section>
            <section className={styles.inputContainer}>
                <TextInput onChangeValue={onChangeFlightNumber} placeholder="Flight Number" value={flightNumber} />
                <SecondaryButton label="Join Flight" onClick={() => console.log(flightNumber)} style={{rootContainer: styles.secondaryButtonContainer}} />
                <PrimaryButton label="Depart" onClick={() => console.log(flightNumber)} trailingIconName={faPlaneDeparture} />
            </section>
        </section>
    )
}