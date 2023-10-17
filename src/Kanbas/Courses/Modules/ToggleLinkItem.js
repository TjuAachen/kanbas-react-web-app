import React from 'react';

function ToggleLinkItem({module}) {
  return (
    <div id="module1" className="list-group-item" style={{ padding: 0 }}>
      <div className="list-group-item">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
          <path
            d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
          <path
            d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
          />
        </svg>
        <a style={{ textDecoration: 'none', fontWeight: 'bold' }}>{module.description}</a>

        <div className="float-end">
          <i className="fa fa-check" style={{ color: 'green', marginRight: '17px' }}></i>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
            <path
              d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ToggleLinkItem;
