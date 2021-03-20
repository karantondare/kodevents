import React from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import { format } from "date-fns";

const EventDetailedInfo = ({ event }) => {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" className="blue-icon" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" className="blue-icon" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{format(event.date, "MMMM d, yyyy h:mm a")}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" className="blue-icon" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              className="ui button blue-button"
              size="tiny"
              content="Show Map"
            />
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailedInfo;
