import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card fileId={0} fileName={''} fileMimeType={''} fileSize={0} />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
