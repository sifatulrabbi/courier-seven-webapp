import React from "react";
import { faqData } from "../../assets";
import QuestionCard from "../question-card/question-card";
import { v4 as uuid } from "uuid";
import Button from "../button/button";

export default function FaqSection() {
  return (
    <section className="faq-section">
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
          Become our <span className="colored">Partner</span> now
        </h3>
        <Button label="Sign up now" big />
      </div>
    </section>
  );
}
