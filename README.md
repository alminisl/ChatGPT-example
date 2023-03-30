# ChatGPT-example
Example app with usng the chatGPT API to send a simple prompt. 

# Usage

Start the app with `node index.js` and execute a simple curl request: 

```
curl -X POST \
  http://localhost:5000/ask \
  -H 'Content-Type: application/json' \
  -d '{ "prompt": "What is the typical weather in Vienna?" }'
```

# Reference

Used the ChatGPT API https://platform.openai.com/docs/api-reference/introduction?lang=node.js and the openai npm package: https://github.com/openapi/openapi
