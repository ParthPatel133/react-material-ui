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
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {
    background: '#ff6666',
    border: 0,
    marginBottom: 15,
    color: 'black',
    padding: '3px 30px',
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
    <div className='App'>
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
  );
}

export default App;
