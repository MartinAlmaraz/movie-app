import { useState } from 'react';
import MovieList from './components/MovieList';
import ANewHope from './assets/ANewHope.jpg';
import Empire from './assets/Empire.jpg';
import ReturnOfJedi from './assets/ReturnOfJedi.jpg';

//Global vavriable for new reviews ids
let nextReviewId = 10;


export default function App() {



const [movieList, setMovieList] = useState ([
  {
    movieId: 1,
    title: 'Star Wars Episode 4 A New Hope', 
    img: ANewHope,
    
    description: 'A farm boy dreams of adventure and a princess rebels against an evil Empire. The fate of the galaxy is forever changed when Luke Skywalker discovers his powerful connection to a mysterious Force, and blasts into space to rescue Princess Leia.'
  
  },
  {
    moveiId: 2, 
    title: 'Star Wars Episode 5 The Empire Strikes Back',
    img: Empire,
    description: 'As Han Solo and Princess Leia flee from the Empire, Luke trains as a Jedi with the ancient Master Yoda. And when Solo and the Princess are captured, Luke is lured into a deadly trap where Vader unveils a shocking truth.'
  },
  {
    movieId: 3,
    title: 'Star Wars Episode 6 Return of the Jedi',
    img: ReturnOfJedi,
    description: 'It is the third and final part of the Star Wars original trilogy. Luke Skywalker and friends travel to Tatooine to rescue their companion Han Solo from the vile Jabba the Hutt. The Empire prepares to crush the Rebellion with a more powerful Death Star, while the Rebel fleet mounts a massive attack on the space station.'
  }
]);

const [reviewList, setReviewList] = useState([
  {
    reviewId: 1,
    movieId: 1,
    user: 'Max',
    date: '11/11/1998',
    stars: 1,
    content: 'First Star Wars review,'
  },
{
    reviewId: 2,
    movieId: 2,
    user: 'Tim',
    date: '11/13/1998',
    stars: 5,
    content: 'First Empire Strikes Back review,'
  }
  
]);

const addReview = (newReviewData) => {
  console.log('addReview:', newReviewData)
  const newReview = {
  
    reviewId: nextReviewId++,
    ...newReviewData,
  };
  setReviewList(reviewList.concat(newReview));
};

const removeReview = (reviewId) => {
  setReviewList(reviewList.filter(review => review.reviewId !== reviewId));
};

  return (
    <MovieList 
    movieList={movieList}
    reviewList={reviewList}
    addReview={addReview}
    removeReview={removeReview}

    />
  );
}


