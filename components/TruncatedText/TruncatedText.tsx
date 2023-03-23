import React from 'react';

const TruncatedText = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return <span>{`${text.slice(0, maxLength)}...`}</span>;
};

export default TruncatedText;
