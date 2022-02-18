import React from "react";
import { Accordion, ListGroup, ListGroupItem } from "react-bootstrap";
import { v4 } from "uuid";

const ProfileAccordion = ({ links }) => {
  return (
    <Accordion id="navProfileAccordion" className="d-lg-none w-100 border-0">
      <Accordion.Item className="border-0 rounded-0">
        <Accordion.Header id="headingOne" className="border-bottom">
          Profile
        </Accordion.Header>
        <Accordion.Collapse
          id="navProfileAccordion"
          data-bs-parent="#navProfileAccordion"
          className="rounded-0"
        >
          <Accordion.Body className="p-0">
            <ListGroup
              className="border-0 rounded-0"
              style={{ paddingLeft: "2rem" }}
            >
              {links.map((link) => (
                <ListGroupItem key={v4()} className="border-0 border-bottom">
                  {link.name}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProfileAccordion;
