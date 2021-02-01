import React, { useState } from "react";
import "../../styles/forms.scss";

const AccordionItem = ({ activeForm, setActiveForm, title, children }) => {
  return (
    <div className="accordion-item">
      <div onClick={() => setActiveForm(title)} className="accordion-trigger">
        <h4>{title}</h4>
        <div
          className={`accordion-icon ${
            activeForm === title ? "is-active" : ""
          }`}
        ></div>
      </div>
      <div
        className={`accordion-content ${
          activeForm === title ? "is-active" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const Accordion = ({ forms, activeItem }) => {
  const [activeForm, setActiveForm] = useState(activeItem);
  const items = forms.map(item => (
    <AccordionItem
      activeForm={activeForm}
      setActiveForm={setActiveForm}
      title={item.title}
    >
      {item.form}
    </AccordionItem>
  ));

  return <>{items}</>;
};

export default Accordion;
