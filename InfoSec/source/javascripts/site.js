//= require jquery

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
