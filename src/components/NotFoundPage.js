import React from "react";
import { Segment, Button, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";


function NotFoundPage() {

  return (
    <Segment className="segment-block" >
      <Header as='h1' icon textAlign="center">
        <Icon name='wheelchair' />
        Страница не найдена
      </Header>
      <div className="buttons-align-wrapper">
        <Button as={Link} to={"/"} primary>На главную</Button>
      </div>
    </Segment>
  );
}
export default NotFoundPage;