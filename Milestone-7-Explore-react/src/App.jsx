import './App.css'
import Counter from './counter';
import Team from './Team';

function App() {

  function handleClick(){
    alert('Button 1 clicked.');
  }

  const handleClick2 = () => {
    alert('Button 2 clicked.');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Concepts</h2>

      <Team></Team>

      <Counter></Counter>

      {/* Event handler */}
      <button onClick={handleClick}>CLICK 1</button>
      <button onClick={handleClick2}>CLICK 2</button>
      <button onClick={() => {alert('Button 3 clicked.')}}>CLICK 3</button>
      <button onClick={() => addToFive(5)}>CLICK 4</button>
    </>
  )
}

export default App
