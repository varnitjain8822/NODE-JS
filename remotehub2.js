/* Chatbot */
function toggleChat() {
  let chatbot = document.getElementById("chatbot");
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

function handleKey(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  let input = document.getElementById("chatInput");
  let text = input.value.trim();
  if (text === "") return;

  // Show user message
  let body = document.getElementById("chatbotBody");
  let userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = text;
  body.appendChild(userMsg);

  // Auto-scroll
  body.scrollTop = body.scrollHeight;

  input.value = "";

  // Fake bot reply
  setTimeout(() => {
    let botMsg = document.createElement("div");
    botMsg.className = "bot-msg";
    botMsg.textContent = getBotReply(text);
    body.appendChild(botMsg);
    body.scrollTop = body.scrollHeight;
  }, 1000);
}

/* Fake AI replies */
function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! 👋 How can I assist you with Remote Classroom today?";
  } else if (msg.includes("login")) {
    return "For login, please enter your Email/Mobile and OTP above.";
  } else if (msg.includes("signup")) {
    return "Click on 'Sign Up' to create a new student or teacher account.";
  } else if (msg.includes("help")) {
    return "I can help you with login, signup, and classroom info!";
  } else {
    return "I'm still learning 🤖. Please try asking about login, signup, or help.";
  }
}


function setRole(role) {
  document.getElementById("role").value = role;
  alert(role + " Login Selected");
}

document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  let role = document.getElementById("role").value;
  let emailMobile = document.getElementById("emailMobile").value;
  let otp = document.getElementById("otp").value;

  alert("Role: " + role + "\nEmail/Mobile: " + emailMobile + "\nOTP: " + otp);
});

/* Chatbot */
function toggleChat() {
  let chatbot = document.getElementById("chatbot");
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

function handleKey(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  let input = document.getElementById("chatInput");
  let text = input.value.trim();
  if (text === "") return;

  // Show user message
  let body = document.getElementById("chatbotBody");
  let userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = text;
  body.appendChild(userMsg);

  // Auto-scroll
  body.scrollTop = body.scrollHeight;

  input.value = "";

  // Fake bot reply
  setTimeout(() => {
    let botMsg = document.createElement("div");
    botMsg.className = "bot-msg";
    botMsg.textContent = getBotReply(text);
    body.appendChild(botMsg);
    body.scrollTop = body.scrollHeight;
  }, 1000);
}

/* Fake AI replies */
function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! 👋 How can I assist you with Remote Classroom today?";
  } else if (msg.includes("login")) {
    return "For login, please enter your Email/Mobile and OTP above.";
  } else if (msg.includes("signup")) {
    return "Click on 'Sign Up' to create a new student or teacher account.";
  } else if (msg.includes("help")) {
    return "I can help you with login, signup, and classroom info!";
  } else {
    return "I'm still learning 🤖. Please try asking about login, signup, or help.";
  }
}

