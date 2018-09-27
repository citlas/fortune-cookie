import React from 'react';

function Quote(props){

    return (
      
      <div className="Quote">
      
        <div className='quote-info'>
            <p className='quote'>{props.quote}  </p>
            <p className='author'> {props.author}  </p>
        </div>
        <hr/>
      </div>
      
    );

}

export default Quote;
