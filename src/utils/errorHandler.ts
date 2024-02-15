function errorHandler(error: unknown): { status: number; message: string } {
  if (error instanceof Error) {
    // This handles all errors that are instances of the Error class, including TypeError, SyntaxError, etc.
    return { status: 500, message: `Error: ${error.message}` };
  } else if (typeof error === 'string') {
    // Handle cases where the error is a string
    return { status: 400, message: `String Error: ${error}` };
  } else if (error === null) {
    // Handle cases where the error is explicitly null
    return { status: 500, message: 'Null error occurred' };
  } else if (error === undefined) {
    // Handle cases where the error is undefined
    return { status: 500, message: 'Undefined error occurred' };
  } else if (typeof error === 'object') {
    // Handle cases where the error is an object. Note: null is also an object in JavaScript
    const message = error ? JSON.stringify(error) : 'Unknown object error';
    return { status: 500, message: `Object Error: ${message}` };
  } else {
    // Handle any other types (number, boolean, etc.)
    return { status: 500, message: `Unhandled error type: ${typeof error}` };
  }
}

export default errorHandler;
