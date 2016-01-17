# dash-hue
Use Amazon Dash Buttons to Control Hue Smart lights.

## Installation

1. Follow the setup instructions for Hue and Amazon Dash
2. Find you hue bridge IP address and setup an account (see: http://www.developers.meethue.com/documentation/getting-started)
3. Enter the IP Address and Username into "lights-out.js"
4. Run ```npm install``` to install dependencies
5. Run ```sudo node node_modules/node-dash-button/bin/findbutton``` and press your Dash button. At this point, you should be able to see the MAC address for you dash button.
6. Copy the mac address into the script at the bottom
7. Run ```npm start```
8. Your done. Press you button, and watch your lights respond.

