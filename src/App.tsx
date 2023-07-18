// import styles from './App.module.scss';

import { Card } from "./components/card/card";

function App() {
    return (
        <>
            <Card fileId={1} fileName="Lord of the Rings.mp4" fileMimeType="ogg" fileSize={1024*1024*700} />
        </>
    );
}

export default App;
