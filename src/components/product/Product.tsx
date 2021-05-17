import React, {useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import {getProductById} from "../../inventory";
import SlideShow from "./SlideShow";
import faker from 'faker';
import _ from 'lodash';
import Specs from "./Specs";
import Review from "./Review";
import AddToCart from "./AddToCart";
import {useParams} from "react-router-dom";
import {Analytics, AnalyticsAction, AnalyticsCategory} from "../../analytics";


const useStyles = makeStyles({
    card: {
        marginTop: 20,
        backgroundColor: '#ffffff'
    },
    details: {
        borderLeft: '2px solid #efefef',
    },
    name: {
        fontSize: 48,
        fontWeight: 700,
    },
    description: {
        fontSize: 16,
    },
    price: {
        fontSize: 18,
        fontFamily: 'bold',
    },
    priceText: {
        border: '2px solid #efefef',
        borderRadius: 8,
        display: 'inline-block',
        padding: '4px 8px',
    },
});


interface Props {
}

const getProductIdFromSlug = (slug: string) => {
    return _.toNumber(slug.split('-')[0]);
}

const Product: React.FC<Props> = () => {
    const classes = useStyles();
    // @ts-ignore
    const {slug} = useParams();
    const id = getProductIdFromSlug(slug);
    const product = getProductById(id);

    useEffect(() => {
        if (product) {
            Analytics.trackEvent({
                category: AnalyticsCategory.product,
                action: AnalyticsAction.productViewDetails,
                label: product.slug,
                property: product.name,
                value: product.price.toString(),
            })
        }
    }, [product]);

    return (
        !product ?
            <></>
            :
            <Grid container direction="row" alignContent="center" justify="center" className={classes.card} spacing={4}>
                <Grid item xs={6}>
                    <SlideShow product={product}
                               images={[faker.image.image(), faker.image.image(), faker.image.image(), faker.image.image(), faker.image.image(),]}/>
                </Grid>

                <Grid item xs={6} className={classes.details}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} className={classes.name}>{product?.name}</Grid>
                        <Grid item container xs={12} alignContent="center" justify="center">
                            <Grid item xs={6} className={classes.price}>
                                <div className={classes.priceText}>
                                    ${product?.price}
                                </div>
                            </Grid>
                            <Grid item xs={6} className={classes.description}>
                                <Review/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.description}>{product?.description}</Grid>
                        <Specs size={8} label='Brand Name' value={faker.company.companyName()}/>
                        <Specs size={4} label='Width' value={`${_.random(10, 200)}cm`}/>
                        <Specs size={8} label='Characteristics' value={faker.commerce.productAdjective()}/>
                        <Specs size={4} label='height' value={`${_.random(10, 200)}cm`}/>
                        <Specs size={8} label='Material' value={faker.commerce.productMaterial()}/>
                    </Grid>
                    <AddToCart productId={product.id}/>
                </Grid>
            </Grid>
    );
}

export default Product;
