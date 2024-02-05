import { createBoard } from '@wixc3/react-board';
import {LandingPage} from "@/src/app/LandingPage";

export default createBoard({
    name: 'LandingPage',
    Board: () => <LandingPage/>,
    isSnippet: true,
});
