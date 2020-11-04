import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* variant prop lets you specify how you want the button to look */}
        <ButtonGroup variant="contained" color="secondary">
          <Button startIcon={<SaveIcon />} href="#">
            Save
          </Button>
          <Button startIcon={<DeleteIcon />} href="#">
            Discard
          </Button>
        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
