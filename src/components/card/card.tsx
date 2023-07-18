import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    fileId: number;
    fileName: string;
    fileMimeType: string;
    fileSize: number;
}

export const Card = ({ className, fileName, fileMimeType, fileSize }: CardProps) => {
    return (
        <>
            <div className={classNames(styles.Card, className)}>
                <div className={styles.Title}>{fileName}</div>
                <div className={styles.Details}>
                    <div className={styles.MimeType}>{fileMimeType}</div>
                    <div className={styles.Size}>{fileSize}</div>
                </div>
                <div className={styles.Action}>
                    <button type='button'>??????</button>
                </div>
            </div>
        </>
    );
};
