import { useState } from "react";

const Form = () => {
  // const stuffRef = useRef();
  // const opinionRef = useRef();
  // const imageRef = useRef();
  const [stuff, setStuff] = useState('')
  const [opinion, setOpinion] = useState('')
  const [image, setImage] = useState('')
  const [stuffWasTouched, setStuffWasTouched] = useState(false)
  const [opinionWasTouched, setOpinionWasTouched] = useState(false)
  const [imageWasTouched, setImageWasTouched] = useState(false)
  const stuffIsInvalid = stuff.trim() === '' && stuffWasTouched
  const opinionIsInvalid = opinion.trim() === '' && opinionWasTouched
  const imageIsInvalid = (image.trim() === '' || !image.startsWith('https://')) && imageWasTouched
  //const
  const submitHandler = async () => {
    setStuffWasTouched(true)
    setOpinionWasTouched(true)
    setImageWasTouched(true)
    if (stuff.trim() === '') {
      return
    }
    if (opinion.trim() === '') {
      return
    }
    if (image.trim() === '') {
      return
    }
    const opinionInput = {
      stuff: stuff,
      opinion: opinion,
      image: image,
    }
    const req = await fetch('https://fir-demo-e7c01-default-rtdb.asia-southeast1.firebasedatabase.app/opinion.json', {
      method: 'POST',
      body: JSON.stringify(opinionInput),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //const test = console.log(opinionInput)
    setStuff('')
    setOpinion('')
    setImage('')
    setStuffWasTouched(false)
    setOpinionWasTouched(false)
    setImageWasTouched(false)
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "0 25vw" }}>
      <h4>Stuffs</h4 >
      <input
        style={{ padding: "2vh" }}
        onChange={(e) => {
          setStuff(e.target.value)
        }}
        onBlur={() => [
          setStuffWasTouched(true)
        ]}
        value={stuff}
      ></input>
      {stuffIsInvalid && <div style={{ color: "red" }}>Stuffs can't be blank</div>}
      <h4>Opinions</h4>
      <input
        style={{ padding: "2vh" }}
        onChange={(e) => {
          setOpinion(e.target.value)
        }}
        onBlur={() => {
          setOpinionWasTouched(true)
        }}
        value={opinion}
      ></input>
      {opinionIsInvalid && <div style={{ color: "red" }}>Opinions can't be blank</div>}

      <h4>Image link</h4>
      <input
        style={{ padding: "2vh" }}
        onChange={(e) => {
          setImage(e.target.value)
        }}
        onBlur={() => [
          setImageWasTouched(true)
        ]}
        value={image}
      ></input>
      {imageIsInvalid && <div style={{ color: "red" }}>Images must be in the valid format (http://_____)</div>}
      <button style={{ padding: "1vw", width: "10vw", alignSelf: "center" }} onClick={submitHandler}>Send</button>
    </div >
  );
}

export default Form;