const express = require('express');
const posts = require('./routers/posts');
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`Server is working on http://localhost${port}`);

});


// Index
app.get('/', (req, res) => {
    res.send('Lista dei post');
});


// Show
app.get('/posts/:title', (req, res) => {
    const postId = req.params.title
    res.send('Return the post with id: ' + postId)
})


// Store
app.post('/posts', (req, res) => {
    res.send('Store a new post')
})

// Update

app.put('/posts/:title', (req, res) => {
    res.send('Update the post with a title with ' + req.params.title)
})

// Modify

app.patch('/posts/:title', (req, res) => {
    res.send('Modify the post with a title with ' + req.params.title)
})

// Delete

app.delete('/posts/:title', (req, res) => {
    res.send('Delete the post with a title of ' + req.params.title)
})