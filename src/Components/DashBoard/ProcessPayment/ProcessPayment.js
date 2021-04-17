import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeJsLBtLyhTvrQ86Mu4JgP0wSi0ER95Sxdthyvl3zXmbx4wZZmoJt5ruoyhoxCuCTyFjgBAjsers8lukFy158PS00bWglTkBc');

const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
    );
};


export default ProcessPayment;