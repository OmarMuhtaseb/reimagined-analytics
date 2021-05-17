import React, {useContext} from 'react';
import {Badge, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import {CartContext} from "../context";
import _ from 'lodash';

const useStyles = makeStyles({
    root: {
        background: '#000000',
        paddingTop: 20,

    },
    route: {
        display: 'inline-block',
        color: '#ffffff',
        alignText: 'center',
        padding: '20px 0px',
    },
    cart: {
        display: 'inline-block',
        color: '#ffffff',
    },
    cartCont: {
        padding: '20px 0px',
    },
});


interface Props {
}

const Header: React.FC<Props> = () => {
    const classes = useStyles();
    const {cart} = useContext(CartContext);

    return (
        <Grid container direction='row' alignItems='center' justify='center' className={classes.root}>
            <Grid item xs={1}>
                <Link to='/'>
                    <div className={classes.route}>Home</div>
                </Link>
            </Grid>
            <Grid item xs={1}>
                <Link to='/contact'>
                    <div className={classes.route}>Contact</div>
                </Link>
            </Grid>
            <Grid item xs={1}>
                <Link to='/cart'>
                    <div className={classes.cartCont}>
                        <Badge badgeContent={_.size(cart) || 0} showZero color="secondary">
                            <div className={classes.cart}>Cart</div>
                        </Badge>
                    </div>
                </Link>
            </Grid>
        </Grid>
    );
}

export default Header;
