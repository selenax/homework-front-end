import React from 'react';
import GiphyListItem from './GiphyListItem';

const GiphyList = ({ searchResults }) => {
  const giphyItems = searchResults.map(item => {
    return <GiphyListItem key={item.id} giphy={item.images.original.gif_url} />;
  });
  return <ul className="giphyList">{giphyItems}</ul>;
};

export default GiphyList;
