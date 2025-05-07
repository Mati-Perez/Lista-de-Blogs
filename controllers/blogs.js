const blogsRouter = require('express').Router();
const Blog = require('../models/blog')

//api blogs era la direccion que aparecia en ger y post

blogsRouter.get('/', (request, response) => {
  Blog
  .find({})
  .then(blogs => {
    response.json(blogs)
  })
})

blogsRouter.post('/', (request, response, next) => {
  const blog = new Blog(request.body)

  blog
  .save()
  .then(result => {
    response.status(201).json(result)
  })
  .catch(error => next(error))
})

module.exports = blogsRouter
