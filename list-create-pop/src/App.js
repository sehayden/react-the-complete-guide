import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import Item from "./components/Item";
function App() {
  const [inputFromForm, setInputFromForm] = useState({})
  const [listInput, setListInput] = useState([]);
  const [generatedId, setGeneratedId] = useState(0)
  const staticList = [
    {name: 'ha', age: 1},
    {name: 'bach', age: 12},
    {name: 'nhung', age: 21},
  ]
  
  const GetInput = (param) => {
    //setInputFromForm({...param})
    setListInput(prevListInput =>  {
      return [...prevListInput, {...param, key: generatedId}]
    })
    setGeneratedId(generatedId + 1)
  }

  useEffect(() => {
    console.log(listInput)
  });

  return (
    <div className="App" style={{background: "#333333", height: "100vh"}}>
      <InputForm onSubmitInput = {GetInput}></InputForm>
      {listInput?.map(item => {
        return <div key={item.key} value={item.key} onClick={() => {
          let tempListInput = [...listInput];
          let inputIndex = listInput.indexOf(item);
          tempListInput.splice(inputIndex, 1);
          setListInput(tempListInput)
        }}>
          <Item name={item.name} age={item.age}></Item>        
        </div>
      })}
      
    </div>
  );
}

export default App;
