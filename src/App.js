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
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import "fontsource-roboto";

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

const theme = createMuiTheme({
  // defining palette for primary color
  palette: {
    primary: {
      main: green[400],
      // all color with value "primary" will be green[400]
    },
    secondary: {
      main: orange[400],
    },
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
    <ThemeProvider theme={theme}>
      {/* Placing ThemeProvider here makes it accessible to all the components within; Requires us to pass in a theme, which we can customize*/}
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
          <ButtonGroup variant="contained" color="primary">
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
    </ThemeProvider>
  );
}

export default App;
