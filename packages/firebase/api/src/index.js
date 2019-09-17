const functions = require('firebase-functions');
const app = require('@task-manager/api/');

exports.api = functions.https.onRequest(app);
