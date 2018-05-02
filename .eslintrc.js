module.exports = {
    "env": {
        "browser": true
    },
    "extends": "airbnb-base",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "import/no-commonjs": "error"
    },
    "overrides": [
        {
            "files": ['test/**/*.js'],
            "env": {
                "jasmine": true
            }
        },
        {
            "files": ["src/server.js", "karma.conf.js", "webpack.config.js", "webpack.karma.js" ],
            "env": {
                "node": true
            },
            "rules": {
                "import/no-commonjs": "off"
            },
        }
    ],
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "webpack.config.js"
            }
        }
    }
};