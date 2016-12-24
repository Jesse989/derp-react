import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

function Derps(props) {
  const derps = props.posts.map( (derp) => {
    return <div className="well well-sm text-center">
            <li key={derp._id}>
              <h4>{derp.text}</h4>
              <p>{derp.created_at}</p>
            </li>
          </div>
  });


return (
  <div id="post-stream">
      {derps}
    </div>
  )
}

export default Derps;
