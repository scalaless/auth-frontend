import React, { useState } from "react";
import "../css/main.css"

const StatteButton = () => {
    const [text, setText] = useState(0)

    const increment2 = () => {
        setText(text + 1)
    }

    return (
        <button onClick={increment2} className="bigButton">{text}</button>
    )
}

export default StatteButton