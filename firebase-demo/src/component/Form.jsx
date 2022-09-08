import { useRef } from "react";

const Form = () => {
  const stuffRef = useRef();
  const opinionRef = useRef();
  const imageRef = useRef();
  const submitHandler = async () => {
    const opinion = {
      stuff: stuffRef.current.value,
      opinion: opinionRef.current.value,
      image: imageRef.current.value,
    }
    const req = await fetch('https://fir-demo-e7c01-default-rtdb.asia-southeast1.firebasedatabase.app/opinion.json', {
      method: 'POST',
      body: JSON.stringify(opinion),
      headers: {
        'Content-Type': 'application/json'
      }
    })

  }
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "0 25vw" }}>
      <label>Stuffs</label>
      <input style={{ padding: "2vh" }} ref={stuffRef}></input>
      <label>Opinions</label>
      <input style={{ padding: "2vh" }} ref={opinionRef}></input>
      <label>Image link</label>
      <input style={{ padding: "2vh" }} ref={imageRef}></input>
      <button style={{ padding: "1vw", width: "10vw", alignSelf: "center" }} onClick={submitHandler}>Send</button>
    </div>
  );
}

export default Form;