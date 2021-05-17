import React from 'react';
import {Button, FormControl, Grid, InputLabel, OutlinedInput} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {Analytics, AnalyticsAction, AnalyticsCategory} from "../../analytics";

const useStyles = makeStyles({
    card: {},
    content: {
        fontSize: 60,
        fontWeight: 'bold',
        padding: '40px 0',
        textAlign: 'center',
        background: '#ffffff',
    },
    form: {
        background: '#ffffff',
        marginTop: 80,
        textAlign: 'center',
        padding: 20,
    },
    buttonCont: {
        backgroundColor: '#efefef',
        marginTop: 15,
    },
    button: {
        width: '100%',
        padding: 15,
    },
    margin: {
        marginBottom: 30,
    },
});


interface Props {
}

const Contact: React.FC<Props> = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Grid container direction="row" alignContent="center" justify="center" className={classes.card}>
            <Grid item xs={12}>
                <div className={classes.content}>
                    Contact Us
                </div>
            </Grid>
            <Grid item xs={12}>
                <Grid container className={classes.form} justify='flex-end'>
                    <Grid item xs={12} className={classes.margin}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Full Name</InputLabel>
                            <OutlinedInput
                                labelWidth={60}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} className={classes.margin}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                            <OutlinedInput
                                labelWidth={60}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} className={classes.margin}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Message</InputLabel>
                            <OutlinedInput
                                labelWidth={60}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={4} className={classes.buttonCont}>
                        <Button className={classes.button} onClick={() => {
                            Analytics.trackEvent({
                                category: AnalyticsCategory.contact,
                                action: AnalyticsAction.messageSubmitted,
                            });
                            handleClick();
                        }}>
                            Send Email
                        </Button>
                    </Grid>

                </Grid>
            </Grid>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                message="Email was sent!"
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small"/>
                        </IconButton>
                    </React.Fragment>
                }
            />
        </Grid>
    );
}

export default Contact;
