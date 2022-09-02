import { useState } from "react";

const InputForm = (props) => {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault();
        props.onSubmitInput({
          name: name,
          age: age
        })
      }}>
        <table style={{ background: "white", padding: "5vh 4vw", margin: "0 auto" }}>
          <tbody>
            <tr>
              <td style={{ paddingRight: "1vh" }}>
                <label htmlFor="txtName">Name</label>
              </td>
              <td>
                <input id="txtName" style={{ padding: "1vh" }} onChange={e => {
                  setName(e.target.value)
                }}></input>
              </td>
            </tr>
            <tr>
              <td style={{ paddingRight: "1vh" }}>
                <label htmlFor="txtAge">Age</label>
              </td>
              <td>
                <input id="txtAge" style={{ padding: "1vh" }} onChange={e => {
                  setAge(Number(e.target.value))
                  console.log(typeof age)
                }}></input>
              </td>
            </tr>
            <tr>
              <td colSpan={2} style={{ textAlign: "center" }}>
                <button style={{ background: "#FFB4B4", border: "none", padding: "2vh", marginTop: "1vw" }}>Breathe</button>
              </td>
            </tr>
          </tbody>

        </table>

      </form>

    </div>
  );
}
export default InputForm;