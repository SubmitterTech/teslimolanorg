import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

const ReadMore = ({ text = "", limit, to }) => {
  const removeImages = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const images = doc.querySelectorAll('img');
    images.forEach(img => img.remove());
    return doc.body.innerHTML;
  };

  const createMarkup = (html) => {
    const cleanHtml = removeImages(html);
    return { __html: DOMPurify.sanitize(cleanHtml) };
  };

  return (
    <div>
      {text.length > limit ? (
        <div>
          <div
            dangerouslySetInnerHTML={createMarkup(
              `${text.slice(0, limit)}...`
            )}
          />
          <Link to={to} className="text-blue-500 cursor-pointer ml-2">Devamını Oku</Link>
        </div>
      ) : (
        <div dangerouslySetInnerHTML={createMarkup(text)} />
      )}
    </div>
  );
};

export default ReadMore;