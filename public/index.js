// EVERYTHING BELOW IS FOR THE CHATBOT IMPLEMENTATION

// const form = document.querySelector(".text-for-user");
// const button = document.getElementById("button-main");

// function getResponse(inputMessage) {
//   fetch(`http://localhost:7071/api/chatbot?message=${inputMessage}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       document.querySelector(".chat-bot-box").textContent = data;
//     });
// }

// function doIt() {
//   const message = form.value;
//   getResponse(message);
// }

// button.addEventListener("click", function () {
//   doIt();
// });

// form.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     doIt();
//     form.value = "";
//   }
// });
