import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [inputVal, updateInputVal] = useState("");

  return <div>
    <div>
      <input type="text" onChange={e => updateInputVal(e.target.value)} />
      <Link to={`/search?query=${inputVal}`}>Search</Link>
    </div>
  </div>
};

export default Header;