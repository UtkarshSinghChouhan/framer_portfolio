import React from "react";
import "./sidebar.scss";

const Sidebar = ({ linkInfo }) => {
  return (
    <div className="sidebar">
      <div className="copy">
        {" "}
        <span>&copy;</span>/{new Date().getFullYear()}
      </div>
      <div className="links">
        <div className="line"></div>

        {linkInfo.map((obj) => {
          const { id, name, link, classVal } = obj;
          return (
            <div className={classVal} key={id}>
              {" "}
              <a href={link} target="_blank">
                {name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
