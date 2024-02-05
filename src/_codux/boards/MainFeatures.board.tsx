import { createBoard } from '@wixc3/react-board';
import React from "react";
import MainFeatures from "@/src/app/LandingPage/MainFeatures";

export default createBoard({
    name: 'MainFeatures',
    Board: () => <MainFeatures/>,
    isSnippet: true,
});
