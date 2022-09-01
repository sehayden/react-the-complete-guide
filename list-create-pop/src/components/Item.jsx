const Item = ({ name, age }) => {
  return (
    <div style={{ display: "flex", background: "#FFD0CF", justifyContent: "space-between", margin: "3vh 38vw", padding: "2vh 1vw" }}>
      <div style={{ fontWeight: "bold" }}>{name}</div>
      <div>{age}</div>
    </div>
  );
}
export default Item;