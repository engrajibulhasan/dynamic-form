import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navigation.css";
import { Link } from "react-router-dom";
function Navigation({ addNewPage, preview, handleUploadOpen, otherPage }) {
  console.log('page detail',otherPage);
  return (
    <header className="header-area container-fluid">
      <div className="header-left">Automo</div>

      <div className="header-middle">
        <ul>
          {!otherPage ? (
            <>
              <li>
                <FontAwesomeIcon icon={["fas", "plus"]} />
                <span>Insert</span>
              </li>

              <li onClick={addNewPage}>
                <FontAwesomeIcon icon={["far", "file-alt"]} />
                <span>New Page</span>
              </li>

              <li onClick={() => handleUploadOpen("logo")}>
                <FontAwesomeIcon icon={["fab", "pied-piper"]} />
                <span>Logo</span>
              </li>

              <li onClick={() => handleUploadOpen("cover photo")}>
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
            </>
          ) : (
            <>
              <li>
                <Link to="/create-new-form">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                  <span>Create Form</span>
                </Link>
              </li>

              <li>
                <Link to="/drag-and-drop">
                  <FontAwesomeIcon icon={["fas", "grip-vertical"]} />
                  <span>Drag and Drop</span>
                </Link>
              </li>

              <li>
                <Link to="/login">
                  <FontAwesomeIcon icon={["fas", "lock"]} />
                  <span>Login</span>
                </Link>
              </li>

              <li>
                <Link to="/registration">
                  <FontAwesomeIcon icon={["far", "clipboard"]} />
                  <span>Sign up</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="header-right">
        <span>
          <Link to="/"> <FontAwesomeIcon icon={["fas", "th-large"]} /> Event Manage</Link>
        </span>
        <FontAwesomeIcon icon={["fas", "user-circle"]} />
      </div>
    </header>
  );
}

export default Navigation;
