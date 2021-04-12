import React, { Children } from 'react'
import "../Pages/Home.css"

function Background({background_img, children}) {
    const styles = {
        "background-image": `url(${background_img})`,
        "background-color": "rgb(0,0,0)"
    }
    return (
        <div className = "Home" styles = {styles}>
            {children}
        </div>
    )
}

export default Background
