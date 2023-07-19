import classNames from 'classnames';
import styles from './App.module.scss';
import { Card } from "./components/card/card";

function App() {
    return (
        <>
            <div className={classNames(styles.App)}>
                <div className={classNames(styles.Files)} >
                    <Card fileId={1} fileName="Lord of the Rings.mp4" fileMimeType="ogg" fileSize={1024*1024*700} />
                </div>
                <div className={classNames(styles.DropJone)} >
                    Hello
                </div>
            </div>
        </>
    );
}

export default App;
