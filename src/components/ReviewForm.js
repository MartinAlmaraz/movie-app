import { useState } from 'react';
import Stars from './Stars';

//Form that will create a review for the user and the number of stars

export default function ReviewForm(props) {
 //Review state
    const [userValue, setUserValue] = useState('');
    const [starsValue, setStarsValue] = useState(0);
    const [contentValue, setContentValue] = useState('');

    //Prevents default reload, creates a new review object, inserts movieId form, and marks todays date using props.movie
    const handleSubmit = (event) => {
        event.preventDefault();
        let today = new Date().toLocaleDateString();
        props.addReview({
            movieId: props.movie.movieId,
            user: userValue,
            date: today,
            stars: Number(starsValue),
            content: contentValue,
        });
        setUserValue('');
        setStarsValue(0);
        setContentValue('');
       
    };

    //New form with button to handleSubmit when clicked
    return (
        <form>
            <h5> Review {props.movie.title}</h5>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <label className='form-label'>Name</label>
                        <input 
                          type="text"
                          className='form-control'
                          value={userValue}
                          onChange={(e) => setUserValue(e.target.value)}
                        />
                    </div>
                    <div className='col-sm-6 pt-4'>
                      <Stars rating={starsValue} setRating={setStarsValue} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <label className='form-label'>Comments</label>
                        <input 
                          type="text"
                          className='form-control'
                          value={contentValue}
                          onChange={(e) => setContentValue(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <button 
            className='btn btn-primary mt-3 mb-2 btn-sm'
            onClick={handleSubmit}>
                Make Review
            </button>
        </form>
    );
}