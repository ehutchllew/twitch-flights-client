import React from 'react';
import styles from './scss/VideoThumbnailGrid.module.scss';
import { VideoThumbnail } from './VideoThumbnail';

interface IVideoThumbnailGridProps {
    streams?: any[]
}

export const VideoThumbnailGrid = ({ streams }: IVideoThumbnailGridProps) => {
    return (
        <div className={styles.rootContainer}>
            {streams?.map(stream => <VideoThumbnail key={stream} />)}
        </div>
    )
}