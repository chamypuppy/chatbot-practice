const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtinput");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", () => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
})
const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput);
  txtInput.value = "";
  renderChatbotResponse(userInput);
}

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
}

const renderMessageEle = (txt) => {
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add("user-message");
  messageEle.append(txtNode);
  chatBody.append(messageEle);
}

const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined
  ? "Please trying something else"
  : responseObj[userInput];
}