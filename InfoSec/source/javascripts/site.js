// This is where it all goes :)


/* Set the width of the sidebar to 500px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
/* Chatbot Functionality */
function generateResponse() {
    let userMsg = document.getElementById("msg").value;

    //CLEAR TEXTAREA FOR ANOTHER MESSAGE
    document.getElementById("msg").value = "";

    //ADD A USER MSG TO THE CHAT
    addUserBubble(userMsg);

    //PASS MSG TO DIALOGFLOW
    let botMsg = sendMsg(userMsg);
    
    //ADD A BOT MSG TO THE CHAT
    // wait(4000);
    addBotBubble(botMsg);
}

function addUserBubble(msg){
    // CREATE THE BUBBLE FOR THE MESSAGE - CARD
    var bubble = document.createElement("div");
    bubble.className = "card text-left w-75 user-res";

    // CREATE THE CARD BODY
    var msgBody = document.createElement("div");
    msgBody.className = "card-body";

    // CREATE THE CARD TEXT
    var msgText = document.createElement("p");
    msgText.className = "card-text";

    // ADD THE MESSAGE TO A <P>
    var text = document.createTextNode(msg);

    // APPEND ALL THE ELEMENTS TOGETHER
    msgText.appendChild(text); 
    msgBody.appendChild(msgText);
    bubble.appendChild(msgBody);
    document.getElementById('chat-view').appendChild(bubble);
}

function addBotBubble(msg){
    // CREATE THE BUBBLE FOR THE MESSAGE - CARD
    var bubble = document.createElement("div");
    bubble.className = "card text-left w-75 chatbot-res";

    // CREATE THE CARD BODY
    var msgBody = document.createElement("div");
    msgBody.className = "card-body";

    // CREATE THE CARD TEXT
    var msgText = document.createElement("p");
    msgText.className = "card-text";

    // ADD THE MESSAGE TO A <P>
    var text = document.createTextNode(msg);

    // APPEND ALL THE ELEMENTS TOGETHER
    msgText.appendChild(text); 
    msgBody.appendChild(msgText);
    bubble.appendChild(msgBody);
    document.getElementById('chat-view').appendChild(bubble);
}

function wait(ms) {
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

/* DialogFlow API Call */
function sendMsg(newMsg){
    let response = "Oooppss";

    //GET THE REQUEST TO DIALOGFLOW IN A NICE LITTLE PACKAGE WITH THE USER'S MESSAGE
    var request = new Request('https://api.dialogflow.com/v1/query?v=20150910&lang=en&query=' + newMsg + '&sessionId=12345', {
        headers: new Headers({
            "Authorization": "Bearer 75d41fb167544e40a87d524900554a82" //API KEY
        })
    });

    //SEND THE REQUEST VIA FETCH
    fetch(request)
    .then(response => response.json())
    .then(json => {
        console.log('BOT RESPONSE:', json.result.fulfillment.speech);
        response = json.result.fulfillment.speech;
    })
    .catch(function(error) { 
        console.log ('ERROR =>', error);
    });

    return response;
}

/* Password Checker */
let password = document.getElementById("password")

/* For every character entered, check the password strength */
password.addEventListener('keyup', function() {
	checkStrength(password.value)
})

/* Checks password strength */
function checkStrength(password) {
	let progressBar = document.getElementById("bar")
  let strength = 0

  /* Checks for matches... */
  if (password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
  	strength += 10
  }
  if (password.match(/[A-Z]+/)) {
  	strength += 20
  }
  if (password.match(/[0-9]+/)) {
  	strength += 20
  }
  if (password.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)){
  	strength += 20
  }
  if (password.length > 6) {
  	strength += 10
  }
  if (password.length > 10) {
  	strength += 20
  }

  /* Updates bar accordingly. */
  $("#bar")
      .css("width", strength + "%")
      .attr("aria-valuenow", strength)
}
