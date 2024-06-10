import React from 'react';

const RelatedTags = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className="related-tags my-5">
      <h3 className="text-white text-lg font-bold mb-2">Etiketler</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-700 text-white py-1 px-3 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RelatedTags;