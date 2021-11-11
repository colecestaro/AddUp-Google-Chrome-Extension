console.log("BannerContent Loading...");



function SendMessage() {
  chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log('Message Sent');
  });
};

window.onload = SendMessage;
