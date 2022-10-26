import React from 'react'
import './style.css'

function Notification() {
    return (
        <React.Fragment>
            <div className="panel panel-default">
                <div className="panel-body">
                    {/* Single button */}
                    <div className="btn-group pull-right top-head-dropdown">
                        <button
                            type="button"
                            className="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Notification <span className="caret" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li>
                                <a href="#" className="top-text-block">
                                    <div className="top-text-heading">
                                        You have <b>3 new themes</b> trending
                                    </div>
                                    <div className="top-text-light">15 minutes ago</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="top-text-block">
                                    <div className="top-text-heading">
                                        New asset recommendations in <b>Gaming Laptop</b>
                                    </div>
                                    <div className="top-text-light">2 hours ago</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="top-text-block">
                                    <div className="top-text-heading">
                                        New asset recommendations in <b>5 themes</b>
                                    </div>
                                    <div className="top-text-light">4 hours ago</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="top-text-block">
                                    <div className="top-text-heading">
                                        Assets specifications modified in themes
                                    </div>
                                    <div className="top-text-light">4 hours ago</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="top-text-block">
                                    <div className="top-text-heading">
                                        We crawled <b>www.dell.com</b> successfully
                                    </div>
                                    <div className="top-text-light">5 hours ago</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="top-text-block">
                                    <div className="top-text-heading">
                                        Next crawl scheduled on <b>10 Oct 2016</b>
                                    </div>
                                    <div className="top-text-light">6 hours ago</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="top-text-block">
                                    <div className="top-text-heading">
                                        You have an update for <b>www.dell.com</b>
                                    </div>
                                    <div className="top-text-light">7 hours ago</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="top-text-block">
                                    <div className="top-text-heading">
                                        <b>"Gaming Laptop"</b> is now trending
                                    </div>
                                    <div className="top-text-light">7 hours ago</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="top-text-block">
                                    <div className="top-text-heading">
                                        New asset recommendations in <b>Gaming Laptop</b>
                                    </div>
                                    <div className="top-text-light">7 hours ago</div>
                                </a>
                            </li>
                            <li>
                                <div className="loader-topbar" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default Notification