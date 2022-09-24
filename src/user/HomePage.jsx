import React from 'react'
import { Link } from 'react-router-dom'
import './css.css'

function HomePage() {
    return (
        <>
            <div className="flip-animation">
                <span>C</span>
                <span>h</span>
                <span>a</span>
                <span>o</span>
                <span>s</span>
                <span>.</span>
            </div>

            <div className="typed-animation">
                <h1 className="typed-out">I'm Rang Farm</h1>
            </div>

            <div className="typed-animation">
                <h1 className="typed-out">I'm Rang Farm</h1>
            </div>


            <div class="music-waves-2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <Link to={'admin/index'} className="button">Back dashboard</Link>
            <Link to={'signin'} className="button">Sign in</Link>
            <Link to={'signup'} className="button">Sign up</Link>

        </>

    )
}

export default HomePage