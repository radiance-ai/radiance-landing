import { createBoard } from '@wixc3/react-board';
import Testimonials from "@/src/app/LandingPage/Testimonials";

export default createBoard({
    name: 'Testimonials',
    Board: () => <Testimonials/>,
    isSnippet: true,
});
