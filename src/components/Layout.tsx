import React from 'react';
import {Header} from "./index";
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        background: '#efefef',
        fontFamily: 'Roboto',
        minHeight: '100vh'
    },
    main: {
        maxWidth: '1050px',

        margin: '0 auto'
    }
});

interface Props {
    children: any
}

const Layout: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <Grid container direction='column' className={classes.root}>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={12}>
                <main className={classes.main}>{props.children}</main>
            </Grid>
        </Grid>
    );
}

export default Layout;
