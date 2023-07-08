import React from 'react';
import Review from './Review'

export default function ReviewList(props) {
    const reviewList = props.reviewList.filter(
        (review) => review.movieId === props.movieId
    );

    return (
        <div>
            <h5 className='h5 text-center'>Movie Reviews</h5>
            {(reviewList.length === 0) ? 
            <span>Submit your review!</span>:
            reviewList.map((review) => (
                <Review 
                key={review.reviewId}
                review={review}
                strOfStars={props.starDisplay(review.stars)}
                removeReview={props.removeReview}
                />
            ))
           } 
        </div>
    )
}