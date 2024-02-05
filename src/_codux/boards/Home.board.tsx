import { createBoard } from '@wixc3/react-board';
import React from "react";
import Home from "@/src/app/LandingPage/Home";

export default createBoard({
    name: 'Home',
    Board: () => <Home/>,
    isSnippet: true,
});
