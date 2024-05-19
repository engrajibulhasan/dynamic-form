import { faPiedPiper } from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faFileAlt,
  faImage,
  faKeyboard,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { homeMenu } from "../utils/constant";
import "./Navigation.css";
function Navigation({ addNewPage, preview, handleUploadOpen, otherPage }) {
  const location = useLocation();
  console.log("location", location);
  return (
    <header className="header-area container-fluid">
      <Link to="/" className="header-left text-decoration-none">
        <h3 className="text-success text-decoration-none">
          <FontAwesomeIcon icon={faKeyboard} /> Form Builder
        </h3>
      </Link>

      <div className="header-middle">
        <ul>
          {!otherPage ? (
            <>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faThLarge} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li onClick={addNewPage}>
                <FontAwesomeIcon icon={faFileAlt} />
                <span>New Page</span>
              </li>

              <li onClick={() => handleUploadOpen("logo")}>
                <FontAwesomeIcon icon={faPiedPiper} />
                <span>Add Logo</span>
              </li>

              <li onClick={() => handleUploadOpen("cover photo")}>
                <FontAwesomeIcon icon={faImage} />
                <span>Add Cover</span>
              </li>

              <li onClick={preview}>
                <FontAwesomeIcon icon={faEye} />
                <span>Preview</span>
              </li>

              <li>
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Publish</span>
              </li>
            </>
          ) : (
            <>
              {homeMenu.map((item, index) => (
                <li
                  key={index}
                  className={location.pathname === item.path && "active"}
                >
                  <Link to={item.path}>
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>

      <div className="header-right">
        <FontAwesomeIcon icon={["fas", "user-circle"]} />
      </div>
    </header>
  );
}

export default Navigation;
