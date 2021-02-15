import React from 'react';
import { TitleBar } from '../common/titleBar/TitleBar';
import { VideoMain } from '../common/video/VideoMain';
import styles from './scss/HomeScreen.module.scss';

interface IHomeScreenPropsFromState {
    isMainVideoLive?: boolean;
}
interface IHomeScreenProps extends IHomeScreenPropsFromState {}
export const HomeScreen = ( { isMainVideoLive }: IHomeScreenProps) => {
    function renderMainVideo(){
        return (
            <VideoMain />
        )
    }
    return (
        <div className={styles.rootContainer}>
            <TitleBar />

            {!isMainVideoLive && (
                <section className={styles.mainVideoSection}>
                    {renderMainVideo()}
                </section>
            )}
        </div>
    )
}