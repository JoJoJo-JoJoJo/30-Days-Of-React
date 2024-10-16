// Moment is now in legacy.

import { FaBeer } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Question = () => {
    return <p>Shall we go for a <FaBeer />?</p>
}

//* You can configure react-icons props using React Context API.

export default function App() {
    return (
        <IconContext.Provider value={{ color: "blue", className: "blueValue" }}>
            <div className="app">
                <IconDisplay />
            </div>
        </IconContext.Provider>
    )
}
