import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* variant prop lets you specify how you want the button to look */}
        <Button
          href="#"
          variant="contained"
          color="secondary"
          size="small"
          // disabled
          // style={{ fontSize: 24 }}
        >
          Hello World
        </Button>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
