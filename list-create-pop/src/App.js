import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import Item from "./components/Item";
import Popper from "./components/Popper";
function App() {
  const [inputFromForm, setInputFromForm] = useState({})
  const [listInput, setListInput] = useState([]);
  const [generatedId, setGeneratedId] = useState(0);
  const [isShowPopper, setIsShowPopper] = useState(false);
  const [error, setError] = useState('');
  const staticList = [
    {name: 'ha', age: 1},
    {name: 'bach', age: 12},
    {name: 'nhung', age: 21},
  ]
  
  const GetInput = (param) => {
    //setInputFromForm({...param})
    if (typeof param.age !== 'number' || isNaN(param.age)){
      setIsShowPopper(true);
      setError('Try a number.');
    }
    else if (param.age < 0){
      setIsShowPopper(true);
      setError('Age cannot be negative like you lol.')
    }
    else {
      setListInput(prevListInput =>  {
        return [...prevListInput, {...param, key: generatedId}]
      })
      setGeneratedId(generatedId + 1)
    }
   
  }
  const closePoper = (param) => {
    setIsShowPopper(param);
  }

  useEffect(() => {
    console.log(listInput)
  });

  return (
    <div className="App" style={{background: "#333333", height: "100vh", position: "relative"}}>
      <Popper isShow={isShowPopper} error={error} onClose={closePoper}></Popper>
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
