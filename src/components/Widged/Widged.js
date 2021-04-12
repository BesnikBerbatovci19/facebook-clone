import React from 'react'
import './Widged.css'

const Widged = () => {
    return (
        <div className="widgets">
            <iframe src="https://fr.wikipedia.org/wiki/Main_Page"
             width="340" 
             height="100%"
             style={{ border: "none", overflow: "hidden"}}
             scrolling="no"
             frameBorder="0"
             allowTransparency="true"
             allow="encrypted-media"
             ></iframe>
        </div>
    )
}

export default Widged
