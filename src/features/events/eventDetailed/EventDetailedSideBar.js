import React from "react";
import { Segment, Item } from "semantic-ui-react";

const EventDetailedSidebar = ({ attendees }) => {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: "none", backgroundColor: "#6fb1fc" }}
        attached="top"
      >
        {attendees.length} {attendees.length > 1 ? "People" : "Person"} Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {attendees.map((attendee) => (
            <Item key={attendee.id} style={{ position: "relative" }}>
              <Item.Image
                size="tiny"
                src={attendee.photoURL || "/assets/user.png"}
              />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <span>{attendee.displayName}</span>
                </Item.Header>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
};

export default EventDetailedSidebar;
