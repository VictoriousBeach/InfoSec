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
async function generateResponse() {
    let userMsg = document.getElementById("msg").value;

    //CLEAR TEXTAREA FOR ANOTHER MESSAGE
    document.getElementById("msg").value = "";

    //ADD A USER MSG TO THE CHAT
    addUserBubble(userMsg);

    //PASS MSG TO DIALOGFLOW
    let botMsg = await sendMsg(userMsg);
    console.log(botMsg);
    
    //ADD A BOT MSG TO THE CHAT
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

    // CREATE A ROW WITHOUT GUTTERS
    var rows = document.createElement("div");
    rows.className = "row no-gutters";

    // CREATE THE IMAGE COLUMN
    var imgCol = document.createElement("div");
    imgCol.className = "col-md-3";

    // CREATE THE IMAGE
    var img = document.createElement("img");
    img.src = "https://cdn.clipart.email/3c8e20cd2c9d95810a5286da385599f9_alex-clauss-on-twitter-day-13-bullseye-the-target-dog-one-of-_800-800.jpeg";
    img.className = "card-img";
    img.alt = "Target dog";

    // CREATE THE TEXT COLUMN
    var textCol = document.createElement("div");
    textCol.className = "col-md-9";

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
    textCol.appendChild(msgBody);

    imgCol.appendChild(img);

    rows.appendChild(imgCol);
    rows.appendChild(textCol);

    bubble.appendChild(rows);
    
    document.getElementById('chat-view').appendChild(bubble);
}

/* DialogFlow API Call */
function sendMsg(newMsg){
    //GET THE REQUEST TO DIALOGFLOW IN A NICE LITTLE PACKAGE WITH THE USER'S MESSAGE
    var request = new Request('https://api.dialogflow.com/v1/query?v=20150910&lang=en&query=' + newMsg + '&sessionId=12345', {
        headers: new Headers({
            "Authorization": "Bearer 75d41fb167544e40a87d524900554a82" //API KEY
        })
    });

    //SEND THE REQUEST VIA FETCH
    return fetch(request)
    .then(response => response.json())
    .then(json => {
        console.log('BOT RESPONSE:', json.result.fulfillment.speech);
        return json.result.fulfillment.speech;
    })
    .catch(function(error) { 
        console.log ('ERROR =>', error);
        return "Our chatbot is currently down. Please refresh the page an try again";
    });
}

/* PASSWORD CHECKER */
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
