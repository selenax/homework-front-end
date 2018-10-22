import React from 'react';


const GiphyListItem = ({giphy}) => {
  if(!giphy) {
    return <div class="lds-hourglass"></div>
  }
  return (
  <div className='giphyItem'>
    <img src={giphy}/>
  </div>
  )
}

export default GiphyListItem;