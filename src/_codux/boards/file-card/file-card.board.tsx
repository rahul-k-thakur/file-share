import { createBoard } from '@wixc3/react-board';
import { FileCard } from '../../../components/file-card/file-card';

export default createBoard({
    name: 'FileCard',
    Board: () => <FileCard />
});
