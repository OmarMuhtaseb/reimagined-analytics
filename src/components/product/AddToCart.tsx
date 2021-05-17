import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Button, Grid, TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import {CartContext} from "../../context";
import _ from 'lodash';

const useStyles = makeStyles({
    root: {},
    cart: {
        marginTop: 50,
    },
    button: {
        backgroundColor: '#efefef',
        width: '100%',
        height: '100%',
    },
});


interface Props {
    productId: number
}

const AddToCart: React.FC<Props> = ({productId}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const {push} = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
        push(productId, quantity);
        setOpen(true);
    };
    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Grid container className={classes.cart} spacing={2}>
            <Grid item xs={4}>
                <TextField
                    id="standard-number"
                    label="Quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(_.toNumber(e.target.value))}
                />
            </Grid>
            <Grid item xs={8}>
                <Button className={classes.button} onClick={handleClick}>Add to Cart</Button>
            </Grid>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                message="Added to the cart"
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

export default AddToCart;
