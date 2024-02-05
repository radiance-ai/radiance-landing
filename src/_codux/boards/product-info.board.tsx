import { createBoard } from '@wixc3/react-board';
import { ProductInfo } from '../../../src/components/product-info';
import { RUBBER_DUCKY } from '../../../src/data';

export default createBoard({
    name: 'Product info',
    Board: () => (
        <div>
            <ProductInfo product={RUBBER_DUCKY} addToCart={console.log} />
        </div>
    ),
    isSnippet: true,
});
