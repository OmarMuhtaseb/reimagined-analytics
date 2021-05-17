
# Re-Imagined Analytics
This is a simple ecommerce app. The app consists of four pages. 
- A product-listing page with all the categories to filter by.
- A product details page
- A cart details page
- A contact form page

I tried to keep it as simple as possible. So for the product, I used a static list of the products, along with auto-generated images using `faker` library. As for the cart, I used the context to control the items in the cart over the application. Finally, for the analytics, I used the structure defined by Snowplow without adding any special structure. I used `trackStructEvent`, `trackAddToCart`, `trackRemoveFromCart`.

These are the list of events I used:
| Category | Action |
| --------------- | --------------- |
| category | select |
| category | deselect|
| product| click_details |
| product| view_details |
| product| image_view |
| contact| message_submit|
| add_to_cart|
| remove_from_cart|
