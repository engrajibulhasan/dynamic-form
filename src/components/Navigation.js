import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navigation.css';
function Navigation({addNewPage,preview}) {
    return (
        <header className="header-area container-fluid">
            <div className="header-left">
                 Event
            </div>

            <div className="header-middle">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={["fas", "plus"]} />
                        <span>Insert</span>
                    </li>

                    <li onClick={addNewPage}>
                        <FontAwesomeIcon icon={["far", "file-alt"]} />
                        <span>New Page</span>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={["fab", "pied-piper"]} />
                        <span>Logo</span>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={["far", "image"]} />
                        <span>Cover</span>
                    </li>

                    <li onClick={preview}>
                        <FontAwesomeIcon icon={["far", "eye"]} />
                        <span>Preview</span>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={["far", "paper-plane"]} />
                        <span>Publish</span>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={["fas", "share-alt"]} />
                        <span>Share</span>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={["fas", "cog"]} />
                        <span>Settings</span>
                    </li>
                </ul>
            </div>

            <div className="header-right">
                <span>Event Manage</span>
                <FontAwesomeIcon icon={["fas", "user-circle"]} />
            </div>
        </header>
    )
}

export default Navigation
