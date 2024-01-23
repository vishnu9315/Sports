'use client'
import { useState } from 'react';

const FilterBar = () => {

  const [showCities, setShowCities] = useState(false);
  const [showCategory, setShowCategory] = useState(false)

  const countries = ['India', 'United Kingdom', 'United Arab Emirates', 'Australia', 'New Zealand'];
  const cities = [
    'Kanpur', 'Raipur-Chhattisgarh', 'Thiruvananthapuram', 'Bhopal', 'Visakhapatnam', 'Madurai',
    'Chandigarh', 'Nagpur', 'Aurangabad', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad',
    'Vijayawada', 'Bhubaneshwar', 'Coimbatore', 'Ahmedabad', 'Allahabad', 'Vadodara', 'Ernakulam',
    'Ludhiana', 'Mumbai', 'Varanasi', 'Jaipur', 'Lucknow', 'Rajkot', 'Ranchi', 'Nashik', 'Indore',
    'Patna', 'Surat', 'Delhi', 'Pune', 'Goa'
  ];

  const sports = ['Football', 'Basketball', 'Baseball', 'Soccer', 'Tennis', 'Golf', 'Cricket', /* ... */]

  const ratings = ['1', '2', '3', '4', '5'];






  return (
    <section className="filter">
      <div
        id="drawer-disable-body-scrolling"
        className={`fixed z-40 h-screen p-5 overflow-y-auto bg-white w-72 dark:bg-gray-800 transition-transhtmlForm left-0 top-0 transhtmlForm-none`}
        tabIndex="-1"
        aria-labelledby="drawer-disable-body-scrolling-label"
        aria-modal="true"
        role="dialog"
      >
        <h5 id="drawer-disable-body-scrolling-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Filters
        </h5>
        <button
          type="button"
          data-drawer-dismiss="drawer-disable-body-scrolling"
          aria-controls="drawer-disable-body-scrolling"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close Filters</span>
        </button>
        <div className="border-b pb-3"></div>
        <div className="py-4 ovaerflow-y-auto">
          <ul className="text-slate-700 dark:text-slate-100">
          <CheckboxList items={countries} type="Country" />
            <CollapsibleList title="City" items={cities} show={showCities} setShow={setShowCities} />
            <CollapsibleList title="Category" items={sports} show={showCategory} setShow={setShowCategory} />
            <RatingList ratings={ratings} />
            <li className="mt-1 mb-5 px-1">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Clear Filter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const CollapsibleList = ({ title, items, show, setShow }) => {
  return (
    <li className="mt-1 mb-5">
      <p className="flex items-center justify-between font-semibold my-1">
        <span>{title}</span>
        <button
          onClick={() => setShow(!show)}
          className="focus:outline-none text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
        >
          {show ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      </p>
      {show && <CheckboxList items={items} />}
    </li>
  );
};

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>

const CheckboxList = ({ items }) => {
  return (
    <li className="mt-1 mb-5">
      {items.map((item) => (
        <div key={item.toLowerCase().replace(' ', '-')} className="flex items-center my-1">
          <input
              id={`${item.toLowerCase().replace(' ', '-')}`}
              type="checkbox"
              value={item}
              name={item.toLowerCase().replace(' ', '-')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={`${item.toLowerCase().replace(' ', '-')}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {item}
            </label>
        </div>
      ))}
    </li>
  );
};

const RatingList = ({ ratings }) => {
  return (
    <li className="mt-1 mb-5">
      <span className="font-semibold">Ratings</span>
      {ratings.map((rating) => (
        <div key={`rating-${rating}`} className="flex items-center my-1">
          <input
            id={`rating-${rating}`}
            type="radio"
            value={rating}
            name="rating"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor={`rating-${rating}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {`${rating} Star`}
          </label>
        </div>
      ))}
    </li>
  );
};


export default FilterBar;
