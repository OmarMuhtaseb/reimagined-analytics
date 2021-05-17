import React, {useContext} from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {ProductType} from "../../inventory";
import DeleteIcon from '@material-ui/icons/Delete';
import _ from 'lodash';
import {CartContext} from '../../context';

const useStyles = makeStyles({
    root: {},
    content: {
        fontSize: 60,
        fontWeight: 'bold',
        padding: '40px 0',
        textAlign: 'center',
        background: '#ffffff',
    },
    items: {
        marginTop: 20,
        background: '#ffffff',
        padding: 30,
    },
    title: {
        fontSize: 28,
        borderBottom: '2px solid #efefef',
        marginBottom: 15,
    },
    image: {
        height: 50,
        width: 50,
    },
    delete: {
        cursor: 'pointer',
    }
});


interface Props {
}

type CartItem = ProductType & {
    quantity: number,
    uuid: string,
}

const Cart: React.FC<Props> = () => {
    const classes = useStyles();
    const {cart, pop} = useContext(CartContext);
    const deleteItem = (uuid: string) => {
        pop(uuid);
    }
    return (
        <Grid container direction='row' alignItems='center' justify='center' className={classes.root}>
            <Grid item xs={12}>
                <div className={classes.content}>
                    Cart
                </div>
            </Grid>

            <Grid item xs={12} className={classes.items}>
                <Grid item xs={12}>
                    <Grid container className={classes.title}>
                        <Grid item xs={9}>
                            Items
                        </Grid>
                        <Grid item xs={3}>
                            Quantity
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    {
                        _.map(cart, (item: CartItem) => (
                            <Grid key={item.uuid} container alignContent='center'>
                                <Grid item xs={2}>
                                    <img src={item?.image} className={classes.image} alt='products'/>
                                </Grid>
                                <Grid item xs={7}>
                                    {item?.name}
                                </Grid>
                                <Grid item xs={2}>
                                    {item?.quantity}
                                </Grid>
                                <Grid item xs={1} className={classes.delete} onClick={() => deleteItem(item.uuid)}>
                                    <DeleteIcon/>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Cart;
