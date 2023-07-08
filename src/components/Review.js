///Component that display individual review
import React from 'react';

export default function Review(props) {
    return (
        <div className='p-2 border-top border-secondary row'>
            <div className='col-sm-6'>
               {props.review.user} ({props.review.date})<br/><h6>Rating {props.strOfStars}</h6>
            </div>
            <div className='col-sm-6 d-flex flex-row'>
                <button className='btn btn-primary mt-3 mb-2 btn-sm' onClick={() => props.removeReview(props.review.reviewId)}>
                   Delete
                </button>
            </div>
            <div className='col-sm-12'>{props.review.content}</div>
        </div>
    );
}