import { createBoard } from '@wixc3/react-board';
import { Images } from '../../../src/components/images';
import { RUBBER_DUCKY } from '../../../src/data';

export default createBoard({
    name: 'Images',
    Board: () => (
        <div>
            <Images images={RUBBER_DUCKY.images} />
        </div>
    ),
    environmentProps: {
        canvasWidth: 400,
    },
    isSnippet: true,
});
