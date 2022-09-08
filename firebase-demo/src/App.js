import Form from "./component/Form";
import OpinionList from "./component/OpinionList";
function App() {
  return (
    <div className="App" style={{textAlign: "center"}}>
      <h1>My opinion of Genshin stuffs</h1>
      <Form></Form>
      <OpinionList></OpinionList>
    
    </div>
  );
}

export default App;
