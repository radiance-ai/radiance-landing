import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../src/components/header';
import { RUBBER_DUCKY, SCROOGE } from '../../../src/data';

export default createBoard({
    name: 'Header',
    Board: () => (
        <div>
            <Header
                cart={[
                    { product: RUBBER_DUCKY, size: 'S', quantity: 2 },
                    { product: RUBBER_DUCKY, size: 'XL', quantity: 1 },
                ]}
                user={SCROOGE}
            />
        </div>
    ),
    environmentProps: {
        canvasWidth: 800,
    },
    isSnippet: true,
});
