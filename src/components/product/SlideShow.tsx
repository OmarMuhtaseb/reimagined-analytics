import React from 'react';
// @ts-ignore
import {Slide} from 'react-slideshow-image';
import {Analytics, AnalyticsAction, AnalyticsCategory} from "../../analytics";
import {ProductType} from "../../inventory";

interface Props {
    images: string[],
    product: ProductType,
}

const SlideShow: React.FC<Props> = ({images, product}) => {
    const zoomOutProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        scale: 0.4,
        arrows: true
    };

    return (
        <div className="slide-container">
            <Slide {...zoomOutProperties}
                   onChange={(oldIndex: number, newIndex: number) => {
                       Analytics.trackEvent(
                           {
                               category: AnalyticsCategory.product,
                               action: AnalyticsAction.imageView,
                               label: product.slug,
                               property: images[0],
                               value: newIndex.toString(),
                           });
                   }
                   }
            >
                {images.map((each, index) => (
                    <img alt='any' key={index} style={{width: "100%"}} src={each}/>
                ))}
            </Slide>
        </div>
    );
}

export default SlideShow;
