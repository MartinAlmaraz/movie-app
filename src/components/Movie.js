import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

export default function Movie(props) {
    

    let movieReviews = props.reviewList.filter(
        (review) => props.movie.movieId === review.movieId
    );

// Total of stars for reviews 
let total = 0;
movieReviews.forEach((review) => (total += review.stars));
let average = total === 0 ? 0 : Math.round(total / movieReviews.length);


//function to make a string that will display the stars

function starDisplay(numberOfStars) {
    let stars ='';
    for (let i = 0; i < numberOfStars; i++) stars += "\u2605";
    for (let i = numberOfStars; i < 5; i++) stars += "\u2606";
    return stars;
}

// Rendering movie 

return (
    <div className='card border-dark my-4 mx-auto'>
        <div className='card-header'>
            <div className='container'>
                <div className='row '>
                    <div className='col-2 h-100 pt-1'>
                       <img src={props.movie.img} alt='Star Wars A New Hope' className='movie-img' />
                    </div>
                    <div className='col-10 movie-middle'>
                        <h3>
                            {props.movie.title} {starDisplay(average)}
                        </h3>
                        <br></br>
                        {props.movie.description}
                    </div>
                </div>
            </div>
        </div>
        <div className='card-body text-dark'>
            <ReviewList 
              movieId={props.movie.movieId}
              reviewList={props.reviewList}
              starDisplay={starDisplay}
              removeReview={props.removeReview}
              
              />
        </div>
        <div className='card-footer movie-color-light'>
            <ReviewForm movie={props.movie} addReview={props.addReview} />
        </div>
    </div>
);
}