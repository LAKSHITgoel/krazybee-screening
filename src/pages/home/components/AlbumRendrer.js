import React from "react";
import CrousellContainer from "../container/CrousellContainer";

export default function AlbumRendrer(props) {
  return (
    <div id="container">
      {props.renderdata.length ? (
        props.renderdata.map(obj => (
          <CrousellContainer key={obj.id} {...obj} {...props} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
