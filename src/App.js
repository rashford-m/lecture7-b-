import "./App.css";
import Axios from "axios";

function App() {
  Axios.get("https://catfact.ninja/fact").then((res) => {
    console.log(res.data);
  });
  return (
    <div className="App">
      <button>Generate Cat Fact</button>
      <p></p>
    </div>
  );
}

export default App;
