import React from 'react';
import {Button, Grid} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import {ProductType} from "../../inventory";
import {useHistory} from "react-router-dom";
import {Analytics, AnalyticsAction, AnalyticsCategory} from "../../analytics";

const useStyles = makeStyles({
    container: {
        border: '2px solid #efefef',
        padding: 2,
        borderRadius: 5,
        alignItems: 'stretch',
    },
    root: {
        textAlign: 'center',
        padding: 5,
        border: '1px solid #efefef',
    },
    img: {
        height: 200,
        width: 150,
    },
    name: {
        fontSize: 16,
        fontFamily: 'bold',
        paddingTop: 5,
    },
    desc: {
        fontSize: 10,
        paddingTop: 5,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    price: {
        fontSize: 18,
        fontFamily: 'bold',
        padding: 8,
    },
    priceText: {
        border: '2px solid #efefef',
        borderRadius: 8,
        display: 'inline-block',
        padding: '4px 8px',
    },
    buttonCont: {
        backgroundColor: '#efefef',
        marginTop: 5,
    },
    button: {
        width: '100%',
    },
    detailsCont: {
        backgroundColor: '#efefef',
        marginTop: 15,
    },
});


interface Props {
    product: ProductType
    cta: any,
}

const ProductCard: React.FC<Props> = ({product, cta}) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.container}>
            <Grid container direction="row" alignItems="center" justify={"center"} className={classes.root}>
                <Grid item xs={12}>
                    <img alt='img' className={classes.img}
                         src={product.image}/>
                </Grid>
                <Grid item xs={12} className={classes.name}>
                    {product.name}
                </Grid>
                <Grid item xs={12} className={classes.desc}>
                    {product.description}
                </Grid>
                <Grid item xs={12} className={classes.price}>
                    <div className={classes.priceText}>
                        ${product.price}
                    </div>
                </Grid>
                <Grid item xs={12} className={classes.detailsCont}>
                    <Button className={classes.button} onClick={() => {
                        Analytics.trackEvent(
                            {
                                category: AnalyticsCategory.product,
                                action: AnalyticsAction.productClickDetails,
                                label: product.slug,
                                property: product.name,
                                value: product.price.toString(),
                            });
                        history.push(`/products/${product.slug}`)
                    }}>
                        Details
                    </Button>
                </Grid>
                <Grid item xs={12} className={classes.buttonCont}>
                    <Button className={classes.button} onClick={cta}>
                        Add to Card
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductCard;
