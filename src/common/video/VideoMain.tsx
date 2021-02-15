import React from 'react';
import styles from './scss/VideoMain.module.scss';

export const VideoMain = () => {
    return (
        <>
            <iframe
                className={styles.rootContainer}
                src="https://player.twitch.tv/?channel=rytor&parent=localhost"
                allowFullScreen={true}
            >
            </iframe>
            <iframe 
                className={styles.chatContainer} 
                src="https://www.twitch.tv/embed/rytor/chat?parent=localhost">
            </iframe>
        </>
    )
}