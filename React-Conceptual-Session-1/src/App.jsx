
import './App.css'
import Products from './components/Products/Products'
import Eventhandle from './components/Products/Eventhandle';
import Usestate from './components/Products/Usestate';

function App() {

  const information = {
    massage: "secret",
    phone: "0199999999"
  };


  return (
    <>
      <h1>React Conceptual Session</h1>
      <Usestate></Usestate>
      <Eventhandle></Eventhandle>
      <Products info={information}></Products>
    </>
  )
}

export default App
