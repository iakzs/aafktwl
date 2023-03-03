const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({ auth: process.TOKAN});
// use octokit to make API requests
var epictoken = process.TOKAN
