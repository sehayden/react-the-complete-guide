const Popper = ({ isShow, error, onClose }) => {
  return (
    <div style={{ position: "absolute", background: "white", padding: "5vh 4vw", margin: "10vh 30vw", textAlign: "center", left: 0, right: 0, display: isShow ? 'block' : 'none' }}>
      <div>
        {error}
      </div>
      <button onClick={() => {
        onClose(false);
      }}>Close</button>
    </div>
  );
}
export default Popper;