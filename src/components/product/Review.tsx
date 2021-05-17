import React from "react";
import _ from "lodash";
import {Rating} from "@material-ui/lab";

interface Props {

}

const Review: React.FC<Props> = () => {
    const [rating, setRating] = React.useState(_.random(1, 5));

    return (
        <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
                if (newValue) {
                    setRating(newValue);
                }
            }}
        />

    );
}

export default Review;
