import {AnalyticsAction, AnalyticsCategory} from "./schema";

export class Analytics {
    public static bootstrap() {
        // @ts-ignore
        window.snowplow('newTracker', 'sp1', 'http://localhost:9090', {
            appId: 'tech-stuff'
        })
        // @ts-ignore
        window.snowplow('trackPageView');
        // @ts-ignore
        window.snowplow('enableLinkClickTracking');
    }

    public static trackEvent(data: {
        category: AnalyticsCategory, action: AnalyticsAction, property?: string,
        label?: string, value?: string
    }) {
        // @ts-ignore
        window.snowplow('trackStructEvent', {
            category: data.category,
            action: data.action,
            label: data.label,
            value: data.value,
        });
    }

    public static addToCart(data: { id: string, name: string, category: string, price: number, quantity: number }) {
        // @ts-ignore
        window.snowplow('trackAddToCart', {
            sku: data.id,
            name: data.name,
            category: data.category,
            price: data.price,
            quantity: data.quantity,
            currency: 'USD'
        });
    }

    public static removeFromCart(data: { id: string, name: string, category: string, price: number, quantity: number }) {
        // @ts-ignore
        window.snowplow('trackRemoveFromCart', {
            sku: data.id,
            name: data.name,
            category: data.category,
            price: data.price,
            quantity: data.quantity,
            currency: 'USD'
        });
    }
}
