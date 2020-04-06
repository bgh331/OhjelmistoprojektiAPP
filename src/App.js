import React,  { useState, useEffect }from 'react';
import './App.css';
import AppBar from './Components/AppBar';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import 'react-table-v6/react-table.css';
import { makeStyles } from '@material-ui/core/styles';


function App()  {

  const [values, setValues] = React.useState([]);

  const [question, setQuestion] = useState('');
  const [content, setContent] = useState('');
  const [content1, setContent1] = useState('');
  const [content2, setContent2] = useState('');

  const [Squestion, setSQuestion] = useState('');
  const [Scontent, setSContent] = useState('');
  const [Scontent1, setSContent1] = useState('');
  const [Scontent2, setSContent2] = useState('');


  const handleChange = (event) => {
   setValues(event.target.value);
  };
  const handleChange2 = (event) => {
    setValues(event.target.value);
  };
   
  useEffect(() => fetchdata(), []);

  const fetchdata = () => {
  fetch('https://apitestingnew.herokuapp.com/kyselies')
  .then(response => response.json())
  .then(responseData => {
    setQuestion(responseData._embedded.kyselies[0].question);
    setContent(responseData._embedded.kyselies[0].content);
    setContent1(responseData._embedded.kyselies[0].content1);
    setContent2(responseData._embedded.kyselies[0].content2);
    
    setSQuestion(responseData._embedded.kyselies[1].question);
    setSContent(responseData._embedded.kyselies[1].content);
    setSContent1(responseData._embedded.kyselies[1].content1);
    setSContent2(responseData._embedded.kyselies[1].content2);
    console.log(values);
  })
  .catch(err => console.error(err));
};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  title: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    fontSize:30
  },
}));


const classes = useStyles();


           return (
             
             <div>
               <AppBar/>

               <p className={classes.root}>Valitse sinua parhaiten kuvaava vaihtoehto</p>
  <div className="App">
       <FormControl component="fieldset">
     
      <FormLabel className={classes.title} component="legend" >{question}</FormLabel>
     
      <RadioGroup  aria-label="gender" name="gender1" value={fetchdata} onChange={handleChange}>
        <FormControlLabel value={content} control={<Radio />} label={content} />
        <FormControlLabel value={content1} control={<Radio />} label={content1} /> 
         <FormControlLabel value={content2} control={<Radio />} label={content2} />
         
          </RadioGroup>
            <div>

            </div>
          <FormLabel className={classes.title} component="legend" >{Squestion}</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={values} onChange={handleChange2}>
        <FormControlLabel value={Scontent} control={<Radio />} label={Scontent} />
        <FormControlLabel value={Scontent1} control={<Radio />} label={Scontent1} /> 
         <FormControlLabel value={Scontent2} control={<Radio />} label={Scontent2} />
         </RadioGroup>
         
          </FormControl>
      </div>
     
    </div>             
  
  );
  

}

export default App;
