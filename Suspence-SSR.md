## Suspence And SSR

SSR lets you generated HTML from React components on te server and send that HTML to the Users.

### Previously on React 17

- First on the Server, fetch data for the entire application.
- Then, on the server,render the entire app to HTML and send it in the response.
- Next, on the client, load the JavaScript code for the entire app.
- Finally on the client, connect the JavaScript logic to the server generated HTML for the entire app which is known as Hydration.

The Problem with this in React 17 is was each step has to finish for the entire app at once before next step could start. This is not effieicent if some parts are solower than the others. We have t orender all HTML at once , tyhen all JS at once and everything is then hydated and is interactive.

In React 18, you can use Suspence to break down your app to smaller independent units which will go through the steps independently from each opther and won't block rendering rest of the app.

As a result the users will see the contents sooner and we will even start interacting with app much faster.

Hydration of other sections is also not dependent into component wrapped with suspence.
