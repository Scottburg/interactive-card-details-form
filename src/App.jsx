import { useState } from 'react';
import bgMobile from './assets/bg-main-mobile.png';
import bgDesktop from './assets/bg-main-desktop.png';
import tick from './assets/icon-complete.svg';
import cardLogo from './assets/card-logo.svg';

function App() {
  const emptyCardDetails = {
    name: null,
    number: null,
    expiry: null,
    cvc: null,
  };
  const [success, setSuccess] = useState(false);
  const [cardDetails, setCardDetails] = useState(emptyCardDetails);
  return (
    <section>
      <div className="absolute -z-10">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img
            className="min-w-screen md:min-h-screen"
            src={bgMobile}
            alt="background-image"
          />
        </picture>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-7xl mx-auto">
        <div className="mt-10 mx-5 md:grid md:grid-cols-1 md:gap-8 ">
          <article className="card-front p-5 flex flex-col justify-between">
            <img className="w-14 md:w-20" src={cardLogo} alt="card-logo" />
            <div>
              <h2 className="text-white mb-6 md:text-2xl tracking-widest-xl">
                {cardDetails.number
                  ? cardDetails.number
                  : '0000 0000 0000 0000'}
              </h2>
              <ul className="flex items-center justify-between">
                <li className="text-white uppercase  text-xs md:text-sm tracking-wider-xl">
                  {cardDetails.name ? cardDetails.name : 'Jane Appleseed'}
                </li>
                <li className="text-white  text-xs md:text-sm tracking-wider">
                  {cardDetails.expiry ? cardDetails.expiry : '00/00'}
                </li>
              </ul>{' '}
            </div>
          </article>
          <article className="card-back md:ml-20 relative">
            <p className=" text-xs md:text-base text-white absolute right-9 md:right-12 top-28 tracking-wider">
              {cardDetails.cvc ? cardDetails.cvc : '123'}
            </p>
          </article>
        </div>
        <div className="credit-card-form">
          {success ? (
            <SuccessScreen setSuccess={setSuccess} />
          ) : (
            <form className="flex flex-col justify-center  gap-8 max-w-lg h-screen">
              <div>
                <label htmlFor="cardholder_name">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholder_name"
                  id="cardholder_name"
                  placeholder="e.g. Jane Appleseed"
                  required
                  value={cardDetails.name}
                  onChange={(e) => {
                    setCardDetails({ ...cardDetails, name: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="card_number">Card Number</label>
                <input
                  type="number"
                  name="card_number"
                  id="card_number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  required
                  maxLength={16}
                  value={cardDetails.number}
                  onChange={(e) => {
                    setCardDetails({ ...cardDetails, number: e.target.value });
                  }}
                />
              </div>
              <article className="flex justify-between items-center gap-8">
                {' '}
                <div className="flex-1">
                  <label htmlFor="expiry_date">Exp Date (MM/YY)</label>
                  <input
                    type="month"
                    name="expiry_date"
                    id="expiry_date"
                    placeholder="MM / YY"
                    required
                    value={cardDetails.expiry}
                    onChange={(e) => {
                      setCardDetails({
                        ...cardDetails,
                        expiry: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="cvc">Cvc</label>
                  <input
                    type="number"
                    name="cvc"
                    id="cvc"
                    placeholder="e.g. 123"
                    maxLength={3}
                    required
                    value={cardDetails.cvc}
                    onChange={(e) => {
                      setCardDetails({ ...cardDetails, cvc: e.target.value });
                    }}
                  />
                </div>
              </article>
              <button
                onClick={() => {
                  setSuccess(true);
                  setCardDetails(emptyCardDetails);
                }}
              >
                Confirm
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const SuccessScreen = ({ setSuccess }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen max-w-lg mx-auto ">
        {' '}
        <img src={tick} className="block mx-auto" />
        <h1 className="dark-violet text-2xl uppercase text-center my-6 tracking-widest">
          Thank you!
        </h1>
        <p className=" dark-violet text-center my-6 tracking-wider">
          We've added your card details
        </p>
        <button
          className="btn block mx-auto mt-10 w-full"
          onClick={() => {
            setSuccess(false);
          }}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default App;
