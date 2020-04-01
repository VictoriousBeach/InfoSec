const dotenv = require('dotenv').config({path: '../../.env'})
 
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

// TESTING DOTENV CONNECTION
if (dotenv.error) {
  throw dotenv.error
}
 
console.log(dotenv.parsed)

// CONNECTING TO WATSON ASSISTANT
const assistant = new AssistantV2({
  version: process.env.WATSON_VERSION,
  authenticator: new IamAuthenticator({
    apikey: process.env.WATSON_APIKEY,
  }),
   url: process.env.WATSON_URL,
});

// CREATING A SESSION WITH THE CREATED WATSON ASSISTANT
assistant.createSession({
   assistantId: process.env.WATSON_ASSISTANT_ID
})
  .then(res => {
    session_id = res.result["session_id"];
    console.log(JSON.stringify(res.result, null, 2));

    //SENDING A MESSAGE TO WATSON ASSISTANT
    assistant.message({
           assistantId: process.env.WATSON_ASSISTANT_ID,
        sessionId: session_id,
        input: {
            'message_type': 'text',
            'text': 'Are you human?'
            }
        })
        .then(res => {
            console.log(JSON.stringify(res.result, null, 2));
        })
        .catch(err => {
            console.log(err);
        });

  })
  .catch(err => {
    console.log(err);
  });