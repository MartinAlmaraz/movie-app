import React from 'react';
import Movie from './Movie';
import '../App.css'

export default function MovieList(props) {
    return (
        <div className='bg-image container'>
            <div className='my-3 mx-auto'>
                <h2 className='h2 text-center text-white'> Star Wars Reviews</h2>
            </div>
            {props.movieList.map((movie) => (
                <Movie
                  key={movie.movieId}
                  movie={movie}
                  reviewList={props.reviewList}
                  addReview={props.addReview}
                  removeReview={props.removeReview}
                  />
            ))}
        </div>
    )
}