System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "pragmate-ui",
        "version": "0.1.1",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "environment": "development",
        "global.css": true,
        "params": {
          "application": {
            "token": "abcdefg123"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});