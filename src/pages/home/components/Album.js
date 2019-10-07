import React from "react";

const Album = props => {
  return (
    <div className="album" title={props.title}>
      <img src={props.thumbnailUrl} alt="img" />
      <p>title: {props.title}</p>
    </div>
  );
};

export default Album;
