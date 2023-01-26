import { useState } from 'react';
import bgMobile from './assets/bg-main-mobile.png';
import bgDesktop from './assets/bg-main-desktop.png';
import tick from './assets/icon-complete.svg';
import cardLogo from './assets/card-logo.svg';
import { format } from 'date-fns';

function App() {
  const emptyCardDetails = {
    name: '',
    number: '',
    expiry: '01/01',
    cvc: '',
  };
  const [success, setSuccess] = useState(false);
  const [cardDetails, setCardDetails] = useState(emptyCardDetails);

  // const convertToCardNumber = (num) => {
  //   // let num = '1234567812345678';
  //   let formattedNumber = '';
  //   for (let i = 0; i < num.length; i += 4) {
  //     formattedNumber += num.substring(i, i + 4) + ' ';
  //   }
  //   console.log(
  //     '🚀 ~ file: App.jsx:25 ~ convertToCardNumber ~ formattedNumber.trim()',
  //     formattedNumber.trim()
  //   );
  //   return formattedNumber.trim();
  // };

  const handleCardNumber = (e) => {
    if (e.target.value.length <= 19) {
      setCardDetails({
        ...cardDetails,
        number: e.target.value,
      });
    }
  };

  return (
    <section>
      <div className="absolute -z-10 w-full h-full">
        <picture>
          <source media="(min-width: 1024px)" srcSet={bgDesktop} />
          <img
            className=" background w-full lg:w-1/3  h-72 lg:h-full object-cover"
            src={bgMobile}
            alt="background-image"
          />
        </picture>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="cards-container">
          <div className="card-orientation">
            <article className="card-front p-5 flex flex-col justify-between">
              <img className="w-14 lg:w-20" src={cardLogo} alt="card-logo" />
              <div>
                <h2 className="text-white mb-6 lg:text-2xl tracking-widest-xl">
                  {cardDetails.number
                    ? cardDetails.number
                    : '0000 0000 0000 0000'}
                </h2>
                <ul className="flex items-center justify-between">
                  <li className="text-white uppercase  text-xs lg:text-sm tracking-wider-xl">
                    {cardDetails.name ? cardDetails.name : 'Jane Appleseed'}
                  </li>
                  <li className="text-white  text-xs lg:text-sm tracking-wider">
                    {cardDetails.expiry
                      ? format(new Date(cardDetails.expiry), 'MM yy')
                      : '00/00'}
                  </li>
                </ul>{' '}
              </div>
            </article>
            <article className="card-back lg:ml-20 relative">
              <p className=" text-xs lg:text-base text-white absolute right-12 lg:right-12  tracking-wider ">
                {cardDetails.cvc ? cardDetails.cvc : '123'}
              </p>
            </article>
          </div>
        </div>
        <div className="credit-card-form pt-8 px-5 pb-20">
          {success ? (
            <SuccessScreen setSuccess={setSuccess} />
          ) : (
            <form className="flex flex-col justify-center  gap-8 max-w-lg lg:h-screen">
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
                {/* //Add formating for spaces in card number */}
                <label htmlFor="card_number">Card Number</label>
                <input
                  type="number"
                  name="card_number"
                  id="card_number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  required
                  maxLength="19"
                  value={cardDetails.number}
                  onChange={handleCardNumber}
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
                      if (e.target.value.length <= 3) {
                        setCardDetails({ ...cardDetails, cvc: e.target.value });
                      }
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
      <div className="flex flex-col items-center justify-center lg:h-screen max-w-lg mx-auto ">
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
