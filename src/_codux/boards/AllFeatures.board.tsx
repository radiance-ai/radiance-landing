import { createBoard } from '@wixc3/react-board';
import React from "react";
import AllFeatures from "@/src/app/LandingPage/AllFeatures";

export default createBoard({
    name: 'AllFeatures',
    Board: () => <AllFeatures/>,
    isSnippet: true,
});
