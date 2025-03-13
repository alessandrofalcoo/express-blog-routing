const express = require('express');
const post = require('../posts')
const router = express.Router()

// Index
router.get('/', (req, res) => {
    //res.send('Lista dei post');
    res.json(post);
  });
  
  
  // Show
  router.get('/:slug', (req, res) => {
    const postSlug = req.params.slug
    post.find((thisPost) => {
      if(thisPost.slug === postSlug){
        res.json(thisPost);
      }
    })
  /*   res.send('Return the post with id: ' + postSlug)
   */  /* res.json(postSlug) */
  })
  
  
  // Store
  router.post('/', (req, res) => {
    res.send('Store a new post')
  })
  
  // Update
  
  router.put('/:slug', (req, res) => {
    res.send('Update the post with a slug with ' + req.params.slug)
  })
  
  // Modify
  
  router.patch('/:slug', (req, res) => {
    res.send('Modify the post with a slug with ' + req.params.slug)
  })
  
  // Delete
  
  router.delete('/:slug', (req, res) => {
    res.send('Delete the post with a slug of: ' + req.params.slug)
  });
  
module.exports = router;