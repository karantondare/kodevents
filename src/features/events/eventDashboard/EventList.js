import React from "react";
import EvenListItem from "./EvenListItem";

const EventList = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <EvenListItem key={event.id} event={event} />
      ))}
    </>
  );
};

export default EventList;
