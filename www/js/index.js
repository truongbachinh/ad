function reload() {
    window.location.href='view.html';
}
var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {

    }
};
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "my cordova app",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://myorg@bitbucket.org/teamname/my-app.git"
  },
  "author": "My Name",
  "license": "ISC",
  "homepage": "https://myhomepage.com"
}

