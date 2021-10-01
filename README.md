## Fetch API & Rendering Data with JavaScript
## Test your front-end against a real API 
[a link](https://reqres.in)

#### Key Takeaways 
- The Fetch API returns a Promise, so you need to wait for the promise to resolve by using .then() after it.
- The Fetch API initially return a Response object, which will tell you the status code of the response among other details
- We need to run the .json() method on the response object to turn the response into more useful data. The .json() method will also return a promise, so we need to chain another .then() onto it.
- When using the Fetch API, it won't automatically throw all errors. You have to manually check to see if the response object has an "ok" property on it, and throw an error if it's not. This will help you catch things like a 404 error with the response.
- In order to render our data to the screen, we can use innerHTML or insertAdjacentHTML and insert an HTML string into an existing HTML element.
- Since the data we get back is an array, we can perform .map() on the array to loop over the data. We then use Template literals to construct our HTML string.
- With the Fetch API, you can also perform a POST request by adding additional options when making the request. Make sure to add the proper "headers" and use JSON.stringify() in the body of the request.