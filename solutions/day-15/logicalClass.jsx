import React, { useState } from "react";
import classNames from "classnames";

export default function PlayVinylButton() {
    const [isPlaying, setIsPlaying] = useState(false);

    const btnClass = classNames({
        btn: true,
        "btn-playing": isPlaying
        //? Gives the button element below a class of 'btn-playing' is 'isPlaying' is true.
    });

    return (
        <button
            className={btnClass}
            //? classNames can be set conditionally through the use of an object.
            onClick={setIsPlaying(!isPlaying)}
        ></button>
    )
}
