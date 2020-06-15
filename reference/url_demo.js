const url = require('url');

const myUrl = new URL('https://myweb.com/index.html?id=100&name=Amka');

// Get serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Get Host or Root domain, including port
console.log(myUrl.host);

// Get Hostname, not including port
console.log(myUrl.hostname);

// Get pathname
console.log(myUrl.pathname);

// Get serialized query
console.log(myUrl.search);

// Get object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((val, name) => console.log(name + ' : ' + val));