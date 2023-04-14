import React from 'react'
import ReactStars from 'react-rating-stars-component'

const ReviewCard = () => {
    return (
        <div className='reviewCard'>
            <img src='profile' alt='user' />
            {/* <p>{review.name}</p> */}
            <p>review name</p>
            <ReactStars />
            {/* <span>{review.comment}</span> */}
            <span>comment</span>


        </div>
    )
}

export default ReviewCard