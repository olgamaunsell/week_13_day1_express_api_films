const express = require('express');
const filmRouter = new express.Router();
//since we don't have a database we'll use our front end models at the moment
const films = require('../client/src/models/films')();
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');

// SHOW route

filmRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]})
})



// INDEX route
filmRouter.get('/', function(req, res){
  res.json({data: films})
})

// CREATE route
filmRouter.post('/', function(req, res) {

  // const review = new Review({
  //   comment: req.body.comment,
  //   rating: req.body.rating,
  //   author: req.body.author
  // });
  const film = new Film({
    title: req.body.title,
    actors: req.body.actors,
    reviews: req.body.review
  });

  // film.addReview(review);

  films.push(film);
  res.json({data: films});
});

// UPDATE route

filmRouter.put('/:id', function(req, res){
  films[req.params.id] = {
      title: req.body.title,
      actors: req.body.actors,
      reviews: req.body.reviews
  }

  res.json({data: films})
})

// DELETE route

filmRouter.delete('/:id', function(req,res){
  films.splice(req.params.id, 1)
  res.json({data: films})
})

module.exports = filmRouter;
