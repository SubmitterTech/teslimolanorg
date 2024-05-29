import React from 'react';
import { Link } from "react-router-dom";

const ReadMore = ({ text, limit, to }) => {
  return (
    <div>
      {text.slice(0, limit)}
      {text.length > limit && (
        <Link to={to} className=' cursor-pointer text-blue-500'>
          ... Devam Et
        </Link>
      )}
    </div>
  );
};

export default ReadMore;
