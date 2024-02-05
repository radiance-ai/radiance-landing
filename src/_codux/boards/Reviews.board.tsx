import { createBoard } from '@wixc3/react-board';
import React from "react";
import Reviews from "@/src/app/LandingPage/Reviews";

export default createBoard({
    name: 'Reviews',
    Board: () => <Reviews/>,
    isSnippet: true,
});
