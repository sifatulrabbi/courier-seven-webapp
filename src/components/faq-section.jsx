import React from "react";
import { faqData } from "../assets";
import QuestionCard from "./question-card";
import { v4 as uuid } from "uuid";
import Button from "./button";
import { useNavigate } from "react-router-dom";

export default function FaqSection() {
  const navigate = useNavigate();

  return (
    <section className="faq-section" id="faq">
      <h2 className="section-title">
        Have some
        <br />
        <span className="colored">Questions</span>?
      </h2>
      {faqData.map((data) => (
        <QuestionCard
          key={uuid()}
          title={data.title}
          description={data.description}
        />
      ))}
      <div className="bottom">
        <h3>
          Become our <span className="colored">Partner</span>
        </h3>
        <Button
          label="Register now"
          big
          onClickFnc={function () {
            navigate("/registration", { replace: true });
          }}
        />
      </div>
    </section>
  );
}
