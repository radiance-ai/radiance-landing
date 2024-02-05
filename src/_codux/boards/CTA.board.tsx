import { createBoard } from '@wixc3/react-board';
import React from "react";
import CalltoActionSection from "@/src/app/LandingPage/CTA";

export default createBoard({
    name: 'CalltoActionSection',
    Board: () => <CalltoActionSection/>,
    isSnippet: true,
});
