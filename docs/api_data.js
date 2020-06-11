define({ "api": [
  {
    "type": "post",
    "url": "/review/",
    "title": "Create new review",
    "name": "CreateReview",
    "group": "Review",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stars",
            "description": "<p>Review stars.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Review message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of the Review.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stars",
            "description": "<p>Stars of the Review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of the Review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"_id\": \"object-id\",\n\"token\": \"token\",\n\"stars\": 5,\n\"message\": \"message\",\n\"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Can't find token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/review.js",
    "groupTitle": "Review"
  },
  {
    "type": "delete",
    "url": "/review/:id",
    "title": "Delete Review",
    "name": "DeleteReview",
    "group": "Review",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Review unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Deleted this Review.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Cant find review\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/review.js",
    "groupTitle": "Review"
  },
  {
    "type": "put",
    "url": "/review/:id",
    "title": "Edit Review",
    "name": "EditReview",
    "group": "Review",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Review unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Review token (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stars",
            "description": "<p>Review stars (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Review message (optional).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Deleted this Review.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Cant find review\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/review.js",
    "groupTitle": "Review"
  },
  {
    "type": "get",
    "url": "/review/:id",
    "title": "Request Review informations",
    "name": "GetReview",
    "group": "Review",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of the Review.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stars",
            "description": "<p>Stars of the Review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of the Review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"_id\": \"object-id\",\n\"token\": \"token\",\n\"stars\": 5,\n\"message\": \"message\",\n\"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReviewNotFound",
            "description": "<p>The id of the Review was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Cant find review\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/review.js",
    "groupTitle": "Review"
  },
  {
    "type": "get",
    "url": "/review/",
    "title": "Request Reviews informations",
    "name": "GetReviews",
    "group": "Review",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n[\n   {\n       \"_id\": \"object-id\",\n       \"token\": \"token\",\n       \"stars\": 5,\n       \"message\": \"message\",\n       \"__v\": 0\n   },\n   {\n       \"_id\": \"object-id\",\n       \"token\": \"token\",\n       \"stars\": 5,\n       \"message\": \"message\",\n       \"__v\": 0\n   }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/review.js",
    "groupTitle": "Review"
  }
] });