require('dotenv').config({path: __dirname + '/.env'})

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

console.log(process.env.WATSON_APIKEY);

// const assistant = new AssistantV2({
//   version: '2020-02-05',
//   authenticator: new IamAuthenticator({
//     // apikey: process.env.WATSON_APIKEY,
//     apikey: 'SPlW3U_bLAptMHkCXCipdwS-6WwadrIkGpX8opozNzWj',
//   }),
// //   url: process.env.WATSON_URL,
//   url: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/43832932-8269-4489-a73b-41c7d6b123f6',
// });

// // CREATING A SESSION WITH THE CREATED WATSON ASSISTANT
// assistant.createSession({
// //   assistantId: process.env.WATSON_ASSISTANT_ID
//   assistantId: '02f1a3c0-25af-4ab8-b682-329fd4de055a'
// })
//   .then(res => {
//     session_id = res.result["session_id"];
//     console.log(JSON.stringify(res.result, null, 2));

//     //SENDING A MESSAGE TO WATSON ASSISTANT
//     assistant.message({
//         //   assistantId: process.env.WATSON_ASSISTANT_ID,
//         assistantId: '02f1a3c0-25af-4ab8-b682-329fd4de055a',
//         sessionId: session_id,
//         input: {
//             'message_type': 'text',
//             'text': 'Hello'
//             }
//         })
//         .then(res => {
//             console.log(JSON.stringify(res.result, null, 2));
//         })
//         .catch(err => {
//             console.log(err);
//         });

//   })
//   .catch(err => {
//     console.log(err);
//   });