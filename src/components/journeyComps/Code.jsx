import React, { useState } from "react";
import { languages } from "./langs";
import "../../styles/Code.css";

const Code = () => {
  const numItems = languages.length;
  const height = numItems * 35;

  const allImage = "https://cdn-icons-png.flaticon.com/512/5622/5622887.png";
  const languageImage =
    "https://cdn-icons-png.flaticon.com/512/2420/2420249.png";
  const frameworkImage =
    "https://static.thenounproject.com/png/4211852-200.png";
  const toolImage =
    "https://uxwing.com/wp-content/themes/uxwing/download/tools-equipment-construction/tools-icon.png";

  const [type, setType] = useState("all");
  const [icon, setIcon] = useState(toolImage);

  function handleIcon() {
    let icon;
    if (type === "language") {
      icon = languageImage;
    } else if (type === "framework") {
      icon = frameworkImage;
    } else if (type === "all") {
      icon = allImage;
    } else {
      icon = toolImage;
    }
    setIcon(icon);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="card">
        <div className="main-content">
          <div className="header">
            <img alt="Oops!" width={"70px"} src={icon} />
            <h1 className="text-2xl m-2">Select By:</h1>
            <select
              className="bg-black"
              onChange={(e) => (setType(e.target.value),handleIcon())}
            >
              <option value={"all"}>All</option>
              <option value={"language"}>Programmation Languages</option>
              <option value={"framework"}>Frameworks</option>
              <option value={"tool"}>Tools</option>
            </select>
          </div>
          <p className="heading">Skills Range</p>
          <div
            className="categories flex flex-col flex-wrap"
            style={{ height: `${height}px` }}
          >
            {languages
              .filter((lang) => type === "all" || lang.category === type)
              .map((lang, index) => (
                <div key={lang.name} className={`fade-in delay-${index}`}>
                  <span className="skill-name">{lang.name}</span>
                  <div className="bar w-68 h-6 bg-black rounded-xl">
                    <p
                      className={`bg-${lang.color}-600 rounded-xl w-${lang.progress} h-6 `}
                    >
                      {lang.percentage}%
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
