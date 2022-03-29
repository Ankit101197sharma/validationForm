// import logo from './logo.svg';
import './App.css';
import Form from './Form/Form';
import Parents from './Parents';
// import Child from './Child';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
      <Form/>
      <Parents/>
      {/* <Child/> */}
    </div>
  );
}

export default App;
