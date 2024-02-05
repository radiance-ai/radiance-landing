import { createBoard } from '@wixc3/react-board';
import { CartIcon } from '../../../src/components/icons';
import { RUBBER_DUCKY } from '../../../src/data';

export default createBoard({
    name: 'Cart (empty)',
    Board: () => (
        <div>
            <CartIcon cart={[]} />
        </div>
    ),
    isSnippet: true,
});
