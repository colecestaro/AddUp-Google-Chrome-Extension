var childWindow = false
var x = 0

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (childWindow && !childWindow.closed) {

      console.log('Refreshing...')

      childWindow.close()

      var SetWidth = window.innerWidth;
      var SetHeight = window.innerHeight;
      var windowFeatures = "focused=true, alwaysOnTop=true, type=popup, left=" + SetWidth + ", top=" + SetHeight + ", width=300, height=250";

      childWindow = window.open("https://addup.cash/", "childWindow", windowFeatures);

    } else {

      console.log('Opening')

      var SetWidth = window.innerWidth;
      var SetHeight = window.innerHeight;
      var windowFeatures = "focused=true, alwaysOnTop=true, type=popup, left=" + SetWidth + ", top=" + SetHeight + ", width=300, height=250";
      childWindow = window.open("https://addup.cash/", "childWindow", windowFeatures);

      // how can i ensure it doesnt open twice

    };
  });


/*

10/26

var childWindow = false;

// can you just close it and reopen everytime? W

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('Checking Window')
    checkWindow.call()
  });


function checkWindow() {
    if (childWindow && !childWindow.closed) {
      console.log('Needs Refreshed')
      Refresh.call()
    } else {
      console.log('Needs Opening');
      OpenPopup.call()
    };
};


function OpenPopup() {
  // Function to open the popup
  console.log('Opening Popup...')
  var SetWidth = window.innerWidth;
  var SetHeight = window.innerHeight;
  var windowFeatures = "focused=true, alwaysOnTop=true, type=popup, left=" + SetWidth + ", top=" + SetHeight + ", width=300, height=250";

  childWindow = window.open("https://addup.cash/", "childWindow", windowFeatures);
};


function ClosePopup() {
  // Function to refresh and focus the popup
  console.log('Refreshing Popup...')
  childWindow.close();
};

*/
