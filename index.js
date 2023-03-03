const fs = require('fs');

// Read the contents of the access-token.txt file
const accessToken = fs.readFileSync('access-token.txt', 'utf8');

const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.accessToken
});

// Use the `octokit` instance to make API requests
// For example, get the current user's information:
octokit.users.getAuthenticated().then(({ data }) => {
  console.log(data);
}).catch(error => {
  console.error(error);
});
