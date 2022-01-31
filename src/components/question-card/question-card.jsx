import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function QuestionCard({ title, description }) {
  const [show, setShow] = React.useState(false);
  const headerRef = React.useRef(null);
  const pRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  function toggleShow(e) {
    if (show) {
      setHeight(headerRef.current.clientHeight + 16);
    } else {
      const h = height + pRef.current.clientHeight + 20;
      setHeight(h);
    }

    setShow((prev) => !prev);
  }

  React.useEffect(() => {
    setHeight(headerRef.current.clientHeight + 16);
  }, []);

  return (
    <article
      className={`question-card ${show ? "show" : "hide"}`}
      style={{ height }}
    >
      <header ref={headerRef} onClick={toggleShow}>
        <h4 className="article-title">{title}</h4>
        <button className="icon-btn">
          {!show ? <FaCaretDown /> : <FaCaretUp />}
        </button>
      </header>
      <p ref={pRef} className="article-text">
        {description}
      </p>
    </article>
  );
}
