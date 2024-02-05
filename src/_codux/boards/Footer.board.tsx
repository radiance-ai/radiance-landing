import { createBoard } from '@wixc3/react-board';
import React from "react";
import Footer from "@/src/app/LandingPage/Footer";

export default createBoard({
    name: 'Footer',
    Board: () => <Footer/>,
    isSnippet: true,
});
