import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  ButtonGroup,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: "white",
    pading: "0 30px",
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

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
        <ButtonStyled />
        <TextField
          variant="filled"
          color="secondary"
          type="email"
          placeholder="test@test.com"
        />
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
