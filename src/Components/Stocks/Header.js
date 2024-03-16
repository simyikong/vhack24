// import { useState } from "react";
// import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

const Header = () => {

    return (<>
            <div className="flex items-center">
                <div className="relative">
                    <select id="companies" className="btn btn-light mr-2" name="companies">
                        <option value="Apple Inc(AAPL)">Apple Inc(AAPL)</option>
                        <option value="Microsoft Corp(MSFT)">Microsoft Corp(MSFT)</option>
                        <option value="International Business Machine(IBM)">International Business Machine(IBM)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M8 2a6 6 0 0 1 6 6c0 1.791-.798 3.416-2.057 4.52l5.293 5.293a1 1 0 1 1-1.414 1.414l-5.293-5.293A6 6 0 1 1 8 2zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                </div>
            </div>
            {/*<Search />*/}
            <ThemeIcon/>
        </>);
};

export default Header;
