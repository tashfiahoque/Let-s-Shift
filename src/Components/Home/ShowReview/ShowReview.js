import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Spinner from '../../Shared/Spinner/Spinner';
import './ShowReview.css';

const ShowReview = () => {

    const [allReviews, setAllReviews] = useState([]);
    const [user] = useContext(UserContext)
    // loading all reviews
    useEffect(() => {
        fetch('https://sheltered-beyond-36382.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])

    return (
        <section id="reviews">
            <div className="container py-5 my-md-5 text-center">
                <h2>Our Client's <b style={{ color: '#105746' }}>Feedback</b></h2>

                {
                    allReviews.length === 0 &&
                    <Spinner />
                }

                <div className="row mt-5">
                    {
                        allReviews.map(review =>
                            <div key={review._id} className="col-md-6 col-lg-4 my-3">
                                <div className="py-3 px-4 border rounded h-100">
                                    <div className="row text-left">
                                        <div className="col-4">
                                            <img src={user.photo} className="rounded" alt="" width="70px" />
                                        </div>
                                        <div className="col-8">
                                            <h4><b>{review.name}</b></h4>
                                        </div>
                                    </div>
                                    <p className="text-justify text-secondary pt-2">{review.message}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ShowReview;