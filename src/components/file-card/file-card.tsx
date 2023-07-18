import { Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react'
// import classNames from 'classnames';
import styles from './file-card.module.scss';

export interface FileCardProps {
    className?: string;
}

export const FileCard = ({ className }: FileCardProps) => {
    // return <div className={classNames(styles.root, className)}>FileCard</div>;
    return (
        <>
            <Card className='p-4 max-w-sm max-w-sm:m-auto'>
                <CardBody className='p-2'>
                    <Typography>Lord of the rings Volume 720p 2.mp4</Typography>
                </CardBody>
                <CardFooter className='p-2 flex items-center justify-between'>
                    <Typography>1.2 GB</Typography>
                    <Button>Remove</Button>
                </CardFooter>
            </Card>
        </>
    )
};
