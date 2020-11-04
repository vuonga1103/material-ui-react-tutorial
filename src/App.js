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
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
  typography: {
    // customizing h2 size
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
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
      <Container maxWidth="xs">
        {/*wrapping page in container, this adds some padding on L and R; maxWidth specifies that container will be able to be smaller but cannot be larger than sm width- can do md, lg, xs (xs is mobile size)*/}
        <div className="App">
          <header className="App-header">
            {/* Specifying component prop will make that specific component with an h2 styling */}
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material UI
            </Typography>
            <Typography variant="body1">
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
            </Typography>

            <ButtonStyled />

            <Grid container spacing={2} justify="center">
              {/* Can add spacing between gridd items, justify the contents aka centering horizontally*/}
              <Grid item>
                {/* Grid can either be a container or an item */}
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
