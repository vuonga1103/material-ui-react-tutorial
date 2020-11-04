import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup, FormControlLabel } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";

function CheckboxExample() {
  const [checked, setChecked] = useState(true);

  return (
    // Use form control to add label for checkbox
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          // We can add icons in place of checkbox
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(!checked)}
          // color="primary"
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />

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
