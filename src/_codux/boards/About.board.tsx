import { createBoard } from '@wixc3/react-board';
import About from "@/src/app/LandingPage/About";

export default createBoard({
    name: 'About',
    Board: () => <About/>,
    isSnippet: true,
});
