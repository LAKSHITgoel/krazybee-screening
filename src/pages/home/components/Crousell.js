import React from "react";
import Album from "./Album";
import { Card, Button, Icon } from "antd";

const Crousell = props => {
  const { renderdata } = props;
  return (
    <Card title={props.title}>
      <Button className="left" onClick={props.prev}>
        <Icon type="left"></Icon>
      </Button>
      <div className="flex">
        {renderdata &&
          renderdata.map(o => (
            <Album key={o.id} title={o.title} thumbnailUrl={o.thumbnailUrl} />
          ))}
      </div>
      <Button className="right" onClick={props.next}>
        <Icon type="right"></Icon>
      </Button>
    </Card>
  );
};

export default Crousell;
