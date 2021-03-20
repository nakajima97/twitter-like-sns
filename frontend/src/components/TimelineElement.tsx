import React, { FC } from 'react';

import { Col, Row } from 'react-bootstrap';

import defaultProfileIcon from '../image/default_profile_icon.png';

type Props = {
  name: string;
};

const TimelineElement: FC<Props> = ({ name }) => (
  <Row xs={4}>
    <Col>
      <img
        src={defaultProfileIcon}
        alt="プロフィール画像"
        width="64"
        height="64"
      />
    </Col>
    <Col xs={8}>
      <a href="http://localhost:4000">{name}</a>
    </Col>
  </Row>
);

export default TimelineElement;