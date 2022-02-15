import React from "react";
import { scrollableLinks } from "../utils";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  return (
    <button className="scroll-to-top" onClick={() => scrollableLinks(false)}>
      <IoIosArrowUp />
    </button>
  );
}
