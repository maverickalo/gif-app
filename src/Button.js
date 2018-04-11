import React from 'react';

const Button = props => {
  return (
    <div>
      <div className="App row">
        <div className="mx-auto pt-5">
          <button
            onClick={props.onClick}
            className="btn btn-lg btn-success m-auto"
          >
            CLICK HERE FOR A NEW GIF!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
