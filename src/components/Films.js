import React from "react";

const Film = ({name, children}) => {

    return(
        <>
            <ul class="films">
                <li><a href={children} target="_blank" rel="noopener noreferrer">{name}</a></li>
            </ul>
        </>
    )
}

export default Film;