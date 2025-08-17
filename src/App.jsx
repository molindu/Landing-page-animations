import './App.css'
import LandingPage01 from "./landingPage/LandingPage01.jsx";
import LandingPage02 from "./landingPage/LandingPage02.jsx";
import {useState} from "react";

const pages = [
    <LandingPage01/>,
    <LandingPage02/>,
    // Add more pages here in order
];

function App() {
    const [pageNumber, setPageNumber] = useState(0); // start at first page (index 0)

    function hello(order) {
        if (order === "up") {
            setPageNumber((pre) => Math.min(pages.length - 1, pre + 1)); // max last page
        } else {
            setPageNumber((pre) => Math.max(0, pre - 1)); // min first page
        }
    }

    const NavigateButton = "w-16 h-16 bg-gray-900 flex justify-center items-center rounded-full m-2 ";
    const NavContainer = "flex flex-row justify-between items-center text-white text-lg bg-red-700 w-1/6 rounded-full bottom-0 right-0 z-20 absolute";
    return (
        <div className="flex flex-col justify-between items-center">
            {/* Render current page */}
            {pages[pageNumber]}

            {/* Navigation */}
            <div className={NavContainer}>
                <div className={NavigateButton} onClick={() => hello("down")}>
                    Back
                </div>
                <span>{pageNumber + 1}</span>
                <div className={NavigateButton} onClick={() => hello("up")}>
                    Next
                </div>
            </div>
        </div>
    );
}

export default App
