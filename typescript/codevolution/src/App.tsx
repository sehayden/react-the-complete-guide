import './App.css';
import { Greet } from './components/Greet'
import { ReactNodeType } from './components/ReactNodeType'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'
import { LoggedIn } from './components/state/LoggedIn'

function App() {
  return (
    <div className="App">
      <Greet
        name='Xiao and Chongyun'
        message={10}
        isLoggedIn={true}
      ></Greet>
      <Greet
        name='Albedo and Haydn'
        isLoggedIn={true}
      ></Greet>
      <ReactNodeType>
        <header>World be purged</header>
      </ReactNodeType>
      <Button handleClick={(event) => {
        console.log('Never read angst again', event)
      }}></Button>
      <Input value='' handleChange={event => console.log(event.target.value)}></Input>
      <Container styles={{ border: '1px solid black', padding: '1rem' }}></Container>
      <LoggedIn></LoggedIn>

    </div>
  );
}

export default App;
