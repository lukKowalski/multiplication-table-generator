import React, { useState } from 'react';
import { ButtonGroup, FormControl, InputLabel, Select, Button, Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export const Form = () => {
    const classes = useStyles();
    const [amount, setAmount] = useState(50);

    return <form className={classes.root} noValidate autoComplete="off">
        <TextField 
            type="number" 
            helperText="Dzielenie i mnozenie łącznie" 
            label="Ile przykładów w zestawie" 
            defaultValue={36} 
            variant="outlined" 
        />
        <TextField 
            type="number" 
            helperText="Rada: nie więcej niz 4" 
            label="Ile zestawów"
            defaultValue={4} 
            variant="outlined" 
        />
        <FormControl variant="outlined" className={classes.formControl}>
            <Select
                native
                defaultValue={4}
                inputProps={{
                    name: 'age',
                    id: 'filled-age-native-simple',
                }}
            >
                <option value={1}>1 zestaw</option>
                <option value={2}>2 zestawy</option>
                <option value={3}>3 zestawy</option>
                <option value={4}>4 zestawy</option>
            </Select>
        </FormControl>
        <Box mt="20px">
            <ButtonGroup size="large" color="primary" aria-label="outlined primary button group">
                <Button variant={amount === 20 ? 'contained' : ''} onClick={() => setAmount(20)}>Do 20</Button>
                <Button variant={amount === 50 ? 'contained' : ''} onClick={() => setAmount(50)}>Do 50</Button>
                <Button variant={amount === 100 ? 'contained' : ''} onClick={() => setAmount(100)}>Do 100</Button>
                <Button variant="contained" color="secondary" size="large">Rób te tabliczki człowieku!</Button>
            </ButtonGroup>
        </Box>
    </form>
}