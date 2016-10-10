import express from 'express';
import mongoose from 'mongoose';

const app = express();



app.use('/', express.static('public'));

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
  mongoose.connect('mongodb://localhost/movie-search');
}

app.listen(process.env.PORT || 8000);