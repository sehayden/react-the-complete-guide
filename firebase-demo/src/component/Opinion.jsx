import { useEffect } from "react";

const Opinion = ({ stuff, opinion, image }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{stuff}</h1>
      <div>{opinion}</div>
      <img src={image} style={{ width: "40vw" }} />
    </div>
  );
}

export default Opinion