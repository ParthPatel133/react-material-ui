import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//Text Field
import {TextField} from '@material-ui/core';
//makeStyle for button
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import {green, orange, red} from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles({
  root: {
    background: '#ff6666',
    border: 0,
    marginBottom: 15,
    color: 'black',
    padding: '3px 30px',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: red[500],
    },
  },
});

const ButtonStyled = () => {
  const classes = useStyle();
  return <Button className={classes.root}>Styled Button</Button>;
};

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<SaveIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            color='primary'
          />
        }
        label='testing this'
      />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Typography variant='h2' component='div'>
          Welcome to Material Ui
        </Typography>
        <ButtonStyled />
        <TextField
          variant='outlined'
          color='secondary'
          type='email' //time, date,.. can pass here
          label='type email'
          placeholder='test@test.com'
        />
        <CheckboxExample />
        <ButtonGroup>
          <Button
            startIcon={<SaveIcon />}
            color='primary'
            size='large'
            variant='contained'
          >
            save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            color='secondary'
            size='large'
            variant='contained'
          >
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </ThemeProvider>
  );
}

export default App;
