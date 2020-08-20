import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import languageOptions from './language-options';
import { updateLanguage } from '../../actions/language';
import styles from './header.module.css';

const Header = () => {
  const [inputVal, updateInputVal] = useState("");
  const [langOption, updateLangOption] = useState({ value: "en", label: "English" });
  const dispatch = useDispatch();

  const selectHandler = selectedOption => {
    const { value, label } = selectedOption;
    updateLangOption(selectedOption);
    dispatch(updateLanguage({ code: value, name: label }));
  };

  return <div className={styles.headerWrapper}>
      <div className={styles.searchWrapper}>
        <input className={styles.inputBox} type="text" onChange={e => updateInputVal(e.target.value)} />
        <Link to={`/search?query=${inputVal}`}>
          <button className={styles.searchBtn}>Search</button>
        </Link>
      </div>
      <div className={styles.selectWrapper}>
        <Select
          value={langOption}
          onChange={selectHandler}
          options={languageOptions}
          isSearchable
        />
      </div>
    </div>;
};

export default Header;