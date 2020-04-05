/* PHISHING QUIZ */
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const emailElement = document.getElementById('email')
const senderElement = document.getElementById('email-sender')
const subjectElement = document.getElementById('email-subject')
const bodyElement = document.getElementById('email-body')

let currentQuestion = 0
let score = 0
let isCorrect = false

function startGame() {
	$(emailElement).hide();
  currentQuestion = 0
  showTextNode(0)
}

/* This function displays the text and the email information, if applicable. */
function showTextNode(textNodeIndex) {
	/* Displays text */
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  
  if (textNode.hasOwnProperty("correctAnswer")) {
  	textElement.innerHTML = isCorrect ? textNode.correctAnswer : textNode.wrongAnswer
  } else {
  	textElement.innerHTML = textNode.text
  }
  
  showButtons(textNode)
  showEmail(textNode)  
}

/* Displays option buttons. */
function showButtons(textNode){
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
  textNode.options.forEach(option => {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn', 'btn-dark')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
  })
}

/* Displays email information */
function showEmail(textNode) {
  senderElement.innerHTML = textNode.sender
 	subjectElement.innerHTML = textNode.subject
  bodyElement.innerHTML = textNode.body
}

/* Selecting an option, toggling email, going to next question */
function selectOption(option) {

	$(emailElement).show()

  if (currentQuestion > 8) {
    return startGame()
  }
  
  if (option.hasOwnProperty("answer")) {
  	isCorrect = option.answer == "true"
  }
  
  currentQuestion++
  
  
  if (currentQuestion == 9) {
  	  $(emailElement).hide()
  }
  
  showTextNode(currentQuestion)
}

/* Text nodes - questions and answers - used throughout the game. */
const textNodes = [
	{
  	id: 0,
    text: 'Can you tell when you\'re being phished?',
    options: [
    	{
      	text: 'Start Game'
      }
    ]
  },
  {
    id: 1,
    text: 'You receive the following email from a family friend. Is it real or fake? ',
    sender: 'jessryans@gmail.com',
    subject: 'Look what I found!',
    body: 'You\'re cousin was so silly. lol <a href = "https://drive.google.com.ssytzz.net/OP9803TT">https://drive.google.com/file/d/1VqyTpuJg_g2VluzNnRKvEkjENoG0/view?usp=sharing</a>',
    options: [
      {
        text: 'Seems safe to me!',
        answer: 'false'
      },
      {
        text: 'I don\'t trust it.',
        answer: 'true'
      }
    ]
  },
  {
    id: 2,
    correctAnswer: 'Nice work! You must have seen that the URL linked to ssytzz.net, not google drive.',
    wrongAnswer: 'Not quite. If you hovered over the link, you would see that at the end of the URL, it redirects to ssytzz.net. Be sure to hover over URLs before clicking on them to ensure that they\'re safe',
    sender: 'jessryans@gmail.com',
    subject: 'Look what I found!',
    body: 'You\'re cousin was so silly. lol <mark><a href = "https://drive.google.com.ssytzz.net/OP9803TT">https://drive.google.com/file/d/1VqyTpuJg_g2VluzNnRKvEkjENoG0/view?usp=sharing</a></mark>',
    options: [
      {
        text: 'Continue',
      }
    ]
  },
  {
    id: 3,
    text: 'Your boss sends you a seemingly urgent email.',
    sender: 'joesmith@gmail.com',
    subject: 'change password',
    body: 'hey, our compangy is reviewing passworks to make sure th ey are strong enough. can you send me yours to make sure it"s secure?',
    options: [
      {
        text: 'I can trust him.',
        answer: "false"
      },
      {
        text: 'This is a phishing attempt!',
        answer: "true"
      }
    ]
  },
  {
    id: 4,
    correctAnswer: 'Correct! Just because it says it\'s coming from your boss doesn\'t mean it is. That\'s not information he should have, anyways. Spelling and grammar mistakes are common for phishing attempts.',
    wrongAnswer: 'No, that was a phishing attempt. Phishing emails often have poor grammar or spelling, and your boss (or anyone) shouldn\'t require you to send them your password.',
    sender: '<mark>joesmith@gmail.com</mark>',
    subject: 'change password',
    body: 'hey, our <mark>compangy</mark> is reviewing passworks to make sure <mark>th ey</mark> are strong enough. can you send me yours to make sure <mark>it"s</mark> secure?',
    options: [
      {
        text: 'Continue',
      }
    ]
  },
  {
    id: 5,
    text: 'Your mom sends you a video.',
    sender: 'Mom',
    subject: 'LOL!!!!!!!',
    body: 'look at this video!!!! <a href="https://www.youtube.com/watch?v=t6guz6WxI9Q">https://www.youtube.com/watch?v=t6guz6WxI9Q</a>',
    options: [
      {
        text: 'She got hacked.',
        answer: "false"
      },
      {
        text:'It\'s safe.',
        answer: "true"
      }
    ]
  },
  {
    id: 6,
    correctAnswer: 'Yep, this is a safe email. Always double check the email address of senders, even if it\'s someone you know, but this one is safe.',
    wrongAnswer: 'No, this is actually a completely safe (cat) video.',
    sender: 'Mom',
    subject: 'LOL!!!!!!!',
    body: 'look at this video!!!! <a href="https://www.youtube.com/watch?v=t6guz6WxI9Q">https://www.youtube.com/watch?v=t6guz6WxI9Q</a>',
    options: [
      {
        text: 'Continue',
      }
    ]
  },
{
    id: 7,
    text: 'You just accepted a job position, but you have to fill out some forms.',
    sender: 'dse@docuslgn.net',
    subject: 'Please Sign Technology Agreement',
    body: 'Hi, welcome aboard. Please click the link below to edit and view your document.<br><a href="https://www.docusign.net/Member/EmailStart.aspx?a=fe311f2-51d1-4977-830c-df1efff0469c&acct=387d13-fb1c-4705-9bd9-7cf575f484ce&er=e67a3f-89f1-4108-a4b2-b9f6de2">Click here to review your document.</a>',
    options: [
      {
        text: 'This is a phishing attempt.',
        answer: "true"
      },
      {
        text:'Looks legit.',
        answer: "false"
      }
    ]
  },
  {
    id: 8,
    correctAnswer: 'Correct, this is a phishing attempt. The link looks valid, but the email address is misspelled as "docuslgn".',
    wrongAnswer: 'This isn\'t legitimate! The email address is not from docusign. The address is misspelled.',
    sender: '<mark>dse@docuslgn.net</mark>',
    subject: 'Please Sign Technology Agreement',
    body: 'Hi, welcome aboard. Please click the link below to edit and view your document.<br><a href="https://www.docusign.net/Member/EmailStart.aspx?a=fe311f2-51d1-4977-830c-df1efff0469c&acct=387d13-fb1c-4705-9bd9-7cf575f484ce&er=e67a3f-89f1-4108-a4b2-b9f6de2">Click here to review your document.</a>',
    options: [
      {
        text: 'Continue'
      },
    ]
  },
  {
  	id: 9,
  	text: 'You\'ve reached the end! How\'d you do?',
  	options: [
    {
      text: 'Restart',
    }
  ]
	}
]

$(emailElement).hide();
startGame();
