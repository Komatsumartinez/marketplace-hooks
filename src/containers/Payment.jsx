import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2'
import { AppContext } from '../context/AppContext';
import { handleSumTotal } from '../utils';
import '../styles/components/Payment.css';

const Payment = ({ history }) => {
  const { state: { cart, buyer }, addNewOrder } = useContext(AppContext);

  const paypalOptions = {
    clientId: 'ATN4MgsCVKSXinkSTL1YqlANTikW5fXyo5C7TkyVUG7JB0DTr1G2aabkWFF9Uz6kKo61tL48cfWpomc4',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyle = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {        
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyle}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;