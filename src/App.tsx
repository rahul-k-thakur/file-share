import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography,
} from '@material-tailwind/react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import styles from './App.module.scss';
import { FileCard } from './components/file-card/file-card';

function App() {
    return (
        <>
            <header className="h-10 bg-blue-400">Header</header>
            <main className="m-4 flex-grow max-w-sm:m-auto">
                <FileCard />
            </main>
            <footer className="flex justify-around p-4">
                <Button>Select Files</Button>
                <Button>Start Sharing</Button>
            </footer>
        </>
    );
}

export default App;
