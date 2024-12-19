import React from 'react';
import { Link } from 'react-router-dom';  
import list from '../../public/list.json';  
import Card from './Card';  

const Course = () => {
  return (
    <>
      <div className="  mx-auto md:px-20 px-4"> 
        <div className="flex items-center justify-center text-center">
          <h1 className="mt-28 text-2xl md:text-4xl text-black">
            We're delighted to have you <span className="text-pink-500">Here! :)</span>
          </h1>
        </div> 
        <p className="mt-6 text-lg md:text-xl text-gray-700 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium perspiciatis
          fugiat tempora optio porro, ratione soluta nostrum accusantium, ab eum mollitia nobis,
          reiciendis provident nam quam omnis obcaecati cupiditate amet. Consectetur, cumque,
          officiis numquam veniam nisi perspiciatis a ratione pariatur obcaecati aliquam totam optio
          eum dignissimos nobis sunt architecto hic sapiente deleniti!
        </p> 
        <div className="text-center mt-8">
          <Link to="/">  
            <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition duration-300">
              Back
            </button>
          </Link>
        </div> 
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {list.map((item) => (
            <Card key={item.id} item={item} />  
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
