const express = require('express');
const router = express.Router();
const cors = require('cors');

const http = require('http');



// how to write get requests to our baackend api
router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/chat', (req, res) => {
    console.log(req.body);
    res.send('Message sent to LLM');

    postData = JSON.stringify({
        input: req.body.message
    });


    const options = {
        hostname: '127.0.0.1',
        port: 8080,
        path: '/laptop',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    const makePost = () => {  let data = '';

    const request = http.request(options, (response) => {
      response.setEncoding('utf8');
      response.on('data', (chunk) => {
        data += chunk;
      });
  
      response.on('end', () => {
        console.log(data);
      });
    });
  
    request.on('error', (error) => {
      console.error(error);
    });
  
    // Inject data into the request body
    request.write(postData);
    request.end();
  };
  
  makePost();
});




module.exports = router; //export the router to be used in other files