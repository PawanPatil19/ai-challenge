const express = require('express');
const router = express.Router();
const cors = require('cors');



// how to write get requests to our baackend api
router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/chat', (req, res) => {
    console.log(req.body);
    res.send('Message sent to LLM');
});


module.exports = router; //export the router to be used in other files