import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import languageOptions from './language-options';
import { updateLanguage } from '../../actions/language';

const Header = () => {
  const [inputVal, updateInputVal] = useState("");
  const [langOption, updateLangOption] = useState("");
  const dispatch = useDispatch();

  const selectHandler = selectedOption => {
    const { value, label } = selectedOption;
    updateLangOption(selectedOption);
    dispatch(updateLanguage({ code: value, name: label }));
  };

  return <div>
    <div>
      <input type="text" onChange={e => updateInputVal(e.target.value)} />
      <Link to={`/search?query=${inputVal}`}>Search</Link>
      <Select
        value={langOption}
        onChange={selectHandler}
        options={languageOptions}
      />
    </div>
  </div>
};

export default Header;