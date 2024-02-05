import { createBoard } from '@wixc3/react-board';
import TrustedCompanies from "@/src/app/LandingPage/TrustedCompanies";

export default createBoard({
    name: 'TrustedCompanies',
    Board: () => <TrustedCompanies/>,
    isSnippet: true,
});
