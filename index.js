const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.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
});

// Use the `octokit` instance to make API requests
// For example, get the current user's information:
octokit.users.getAuthenticated().then(({ data }) => {
  console.log(data);
}).catch(error => {
  console.error(error);
});
