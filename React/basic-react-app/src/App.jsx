
import './App.css'
import ProductTab from './ProductTab';
import Msg from './Msg';
import AmazonCardProduct from './AmazonCardProduct';

// function App() {
//   return (
//     <>
//     <h1>Hello World</h1>
//     <h1>My name is keerthi!</h1>      
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//     <Msg name="keerthi" textColor="blue"/>
//     <ProductTab/>
//     </>
//   );
// }


function App() {
  let styles={textAlign:"center"};
  return (
    <>
    <h1 style={styles}>Blockbuster deals on computer accessories | shop now</h1>
    <AmazonCardProduct/>
    </>
  );
}



export default App
