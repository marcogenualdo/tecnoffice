import React, { useState } from "react";
import "../../styles/forms.scss";

const AccordionItem = ({ startsActive, title, children }) => {
  const [isActive, setIsActive] = useState(startsActive);

  return (
    <div className="accordion-item">
      <div onClick={() => setIsActive(!isActive)} className="accordion-trigger">
        <h4>{title}</h4>
        <div className={`accordion-icon ${isActive ? "is-active" : ""}`}></div>
      </div>
      <div className={`accordion-content ${isActive ? "is-active" : ""}`}>
        {children}
      </div>
    </div>
  );
};

const Accordion = ({ forms, activeItem }) => {
  const items = forms.map(item => (
    <AccordionItem startsActive={item.title === activeItem} title={item.title}>
      {item.form}
    </AccordionItem>
  ));

  return <>{items}</>;
};

export default Accordion;
