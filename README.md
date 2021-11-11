# AddUp Google Chrome Extension
AddUp is a Chrome extension that overlays ads on websites to raise money for charity. I developed this extension with the intent to give teenagers and young adults an opportunity to effortlessly generate money for their favorite charities. To download the extension, go to our website - https://addup.cash/

# Code Explanantion
The manifest file includes basic information for the Google Chrome Store - name, version, scripts, permissions. BannerContent.js is called every time a new webpage is opened. When the webpage fully loads, a message is sent to the background script. When the message is received in the background script, the listener function either opens a new childWindow (if the window was closed) or refreshes the childWindow. The childWindow is a popup of an add on our website, AddUp.Cash.

AddUp Nonprofit receives the ad revenue and disperses it to charities voted upon by our users.

# Author
Cole Cestaro - University of Virginia, Class of 2025

# License
This project is licensed under the MIT License.
