import React from 'react';
import {Button, Grid} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import {categories} from "../../inventory";
import _ from 'lodash';
import {Analytics, AnalyticsAction, AnalyticsCategory} from "../../analytics";

const useStyles = makeStyles({
    root: {
        padding: '5px 0'
    },
    content: {
        fontSize: 60,
        fontWeight: 'bold',
        padding: '40px 0',
    },
    categories: {
        padding: 5,
    },
    button: {
        backgroundColor: '#efefef',
        fontSize: 12,
    },
    buttonSelected: {
        fontSize: 12,
        backgroundColor: '#bcbbbb',
    },
});


interface Props {
    category: string | undefined,
    setCategory: Function,
}

const Categories: React.FC<Props> = ({category, setCategory}) => {
    const classes = useStyles();

    const selectCategory = (newCat: string) => {
        if (category === newCat) {
            Analytics.trackEvent({
                category: AnalyticsCategory.category,
                action: AnalyticsAction.deselect,
                label: newCat
            })
            setCategory('');
        } else {
            Analytics.trackEvent({category: AnalyticsCategory.category, action: AnalyticsAction.select, label: newCat})
            setCategory(newCat);
        }
    };

    return (
        <Grid container direction="column" alignItems="center" justify={"center"} className={classes.root}>
            <Grid item>
                <div className={classes.content}>
                    {category}
                </div>
            </Grid>
            <Grid item className={classes.categories}>
                <Grid container spacing={2}>
                    {
                        _.map(categories, (catName: string) => (
                            <Grid item key={catName}>
                                <Button onClick={() => selectCategory(catName)}
                                        className={category === catName ? classes.buttonSelected : classes.button}>{catName}</Button>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Categories;
