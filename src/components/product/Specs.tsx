import React from "react";
import {Grid, GridSize} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {},
    label: {
        color: '#a7a6a6',
        fontSize: 14,
        display: 'inline-block',
        marginRight: 2,
    },
    value: {
        fontSize: 14,
        display: 'inline-block',
    },
});


interface Props {
    size: GridSize,
    label: string,
    value: string | number;
}

const Specs: React.FC<Props> = ({size, label, value}) => {
    const classes = useStyles();

    return (
        <Grid item xs={size} className={classes.root}>
            <div className={classes.label}>
                {label}:
            </div>
            <div className={classes.value}>
                {value}
            </div>
        </Grid>

    );
}

export default Specs;
