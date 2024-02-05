import { createBoard } from '@wixc3/react-board';
import Navbar from "@/src/app/LandingPage/Navbar";

export default createBoard({
    name: 'Navbar',
    Board: () => <Navbar/>,
    isSnippet: true,
});
