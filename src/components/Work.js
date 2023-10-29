import React from "react";
import "./Workcard.css";

import Workcard from "./Workcard";
import WorkcardData from "./WorkcardData";

export default function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkcardData.map((card, ind) => {
          return (
            <Workcard
              key={ind}
              imgsrc={card.imgsrc}
              title={card.title}
              text={card.text}
              view={card.view}
              source={card.source}
            />
          );
        })}
      </div>
    </div>
  );
}
