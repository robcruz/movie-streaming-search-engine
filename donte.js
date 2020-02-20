//created a function which returns a promise containining the text of resolved or rejected state
// The keyword is the function RETURNS a promise, so later the .then method can be used to capture the resolved data
//The .then method accepts two callbacks - a success or error handler. If the there is an error and the callback is not supplied then you must use .catch to capture the error as used below
const dataPromise = (receivedData) => new Promise((resolve, reject) => {
  if(receivedData){
    resolve('I have been accepted');
  } else {
    reject('I have been rejected');
  }
});
dataPromise(true).then(data => console.log('I got data because I was resolved by supplying true as an argument and here is my message: ', data), data => console.log('You should not see this text in the terminal because I was successful resolved : ', data));
dataPromise(false).then(() => console.log('You should not see me in the console because I was rejected'), data => console.log('I was rejected and you are properly view my message : ', data)).catch(e => console.log('I should have not been fired because an error callback was passed as the second argument of the .then()'));
dataPromise(false).then(() => console.log('I will not be inside of the console since I was rejected and the first argument')).catch(e => console.log('The error was caught since there wasnt an error message supplied to .then() and here is the error message: ', e));