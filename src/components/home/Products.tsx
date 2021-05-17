import React, {useContext} from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import ProductCard from "./ProductCard";
import inventory, {ProductType} from '../../inventory';
import _ from 'lodash';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import {CartContext} from "../../context";

const useStyles = makeStyles({
    root: {
        padding: 10,
    },
});


interface Props {
    category: string | undefined,
}

const Products: React.FC<Props> = ({category}) => {
    const classes = useStyles();
    const filteredProducts = _.size(category) > 0 ?
        _.filter(inventory, (product: ProductType) => _.includes(category, product.category)) :
        inventory;

    const {push} = useContext(CartContext);
    const [open, setOpen] = React.useState(false);
    const handleClick = (productId: number) => {
        push(productId, 1);
        setOpen(true);
    };
    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Grid container direction="row" alignItems="center" justify='center' className={classes.root} spacing={3}>
            {
                _.map(filteredProducts, (product: ProductType) => (
                        <Grid key={product.id} item xs={3}>
                            <ProductCard product={product} cta={() => handleClick(product.id)}/>
                        </Grid>
                    )
                )
            }
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

export default Products;
