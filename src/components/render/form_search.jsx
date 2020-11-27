import React, {useState } from 'react';
import { TextField, makeStyles } from '@material-ui/core';
import {useDebounced_effect} from '../hooks/usedebounced_effect';
// props.get_search(e.target.value)
    
function Form_search(props) {
    // const test = makeStyles((theme) => {
    //     console.log(theme)
    // });
    // {test()}
    const [text, setText] = useState("")
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(10),
                // width: '50ch',
            },
        },
    }));
    useDebounced_effect(() =>  props.get_search(text), 800, [text])
    
    const classes = useStyles();
    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic-search" label="Search..." variant="outlined" 
                    onChange={(e)=>setText(e.target.value)} /> 
            </form>
        </>
    );
}

export default Form_search;