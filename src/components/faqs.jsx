import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { faqData } from "../assets/faq-data";
import { v4 } from "uuid";

const FAQs = () => {
  return (
    <Container id="faqs" className="container-lg py-5 px-4">
      <h2 className="h2 text-bolder mb-5 text-center">
        Have a <span className="text-primary">Question</span>?
      </h2>
      <Accordion
        className="mx-auto faq-accordion"
        style={{ maxWidth: "720px" }}
      >
        {faqData.map((data, index) => (
          <Accordion.Item
            key={v4()}
            eventKey={index}
            className="my-3 rounded shadow border-0"
            style={{ overflow: "hidden" }}
          >
            <Accordion.Header>
              <span className="d-block" style={{ width: "90%" }}>
                {data.ques}
              </span>
            </Accordion.Header>
            <Accordion.Body>{data.ans}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default FAQs;
