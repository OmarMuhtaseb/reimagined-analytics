import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import Categories from "./Categories";
import Products from "./Products";

const useStyles = makeStyles({
    card: {
        background: '#ffffff',
    },
    products: {
        background: '#ffffff',
        marginTop: 30,
    },
});


interface Props {
}

const Home: React.FC<Props> = () => {
    const classes = useStyles();
    const [category, setCategory] = useState();

    return (
        <Grid container direction="row" alignItems="center" justify="center">
            <Grid item xs={12} className={classes.card}>
                <Categories category={category} setCategory={setCategory}/>
            </Grid>
            <Grid item xs={12} className={classes.products}>
                <Products category={category}/>
            </Grid>
        </Grid>
    );
}

export default Home;
