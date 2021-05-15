# ajax-error-handler

A default error handler for making ajax calls from a frontend project.

## How to Use

This is meant to be used alongside the `@craigmiller160/ajax-api` library, as the default error handler for the Ajax API produced by it.

This library exports a single function, which creates the error handler. This function takes in an optional object with three optional parameters:

`responseMessageExtractor` = Takes in the `AxiosResponse` object and allows for extracting content from the error response to return in the error message.
`errorMessageHandler` = This is a callback function that receives the composed error message to be handled by the application.
`unauthorizedHandler` = This is a function that will only be called if the response has a 401 status, to allow for unauthorized handling.
