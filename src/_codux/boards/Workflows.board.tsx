import { createBoard } from '@wixc3/react-board';
import Workflows from "@/src/app/LandingPage/Workflows";

export default createBoard({
    name: 'Workflows',
    Board: () => <Workflows/>,
    isSnippet: true,
});
