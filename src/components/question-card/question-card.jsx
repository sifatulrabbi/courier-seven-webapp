import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function QuestionCard({ title, description }) {
  const [show, setShow] = React.useState(false);

  function toggleShow(e) {
    setShow((prev) => !prev);
  }

  return (
    <article className={`question-card ${show ? "show" : "hide"}`}>
      <header onClick={toggleShow}>
        <h4 className="article-title">{title}</h4>
        <button className="icon-btn">
          {!show ? <FaCaretDown /> : <FaCaretUp />}
        </button>
      </header>
      <p className={`article-text ${show ? "show" : "hide"}`}>{description}</p>
    </article>
  );
}
