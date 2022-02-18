import { Accordion, ListGroup, ListGroupItem } from "react-bootstrap";

const ProfileAccordion = ({ links }) => {
  return (
    <Accordion id="navProfileAccordion">
      <Accordion.Item>
        <Accordion.Header id="headingOne">Profile</Accordion.Header>
        <Accordion.Collapse
          id="collapseOne"
          aria-labelledby="headingOne"
          data-bs-parent="#navProfileAccordion"
        >
          <Accordion.Body>
            <ListGroup>
              {links.map((link) => (
                <ListGroupItem>{link.name}</ListGroupItem>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProfileAccordion;
