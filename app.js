const express = require('express');
const postsRouter = require('./routers/posts');
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`Server is working on http://localhost${port}`);

});

app.use('/posts', postsRouter);


