import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import languageOptions from './language-options';
import { updateLanguage } from '../../actions/language';
import styles from './header.module.css';
import weather from './svgs/weather.svg';

/* Renders a Header bar which includes
 * - home icon to navigate to home page when on search page
 * - search bar to get top news based on input query
 * - dropdown to choose news language
 * - weather icon on geolocation error for user information
 */
const Header = () => {
  const [inputVal, updateInputVal] = useState("");
  const [langOption, updateLangOption] = useState({ value: "en", label: "English" });
  const pageType = useSelector(state => state.pageType);
  const geolocation = useSelector(state => state.geolocation);
  const dispatch = useDispatch();

  const selectHandler = selectedOption => {
    const { value, label } = selectedOption;
    updateLangOption(selectedOption);
    dispatch(updateLanguage({ code: value, name: label }));
  };

  const errorMessage = (geolocation.status === "error" && geolocation.error.code === 0) ? `Sorry! Can't see weather details? ${geolocation.error.message}` : "To see weather details, please make sure your geolocation is enabled and then refresh the page.";

  return <div className={styles.headerWrapper}>
      {pageType === "search-page" && <div className={styles.homeIconWrapper}>
        <Link to="/" className={styles.homeIcon}>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32px" height="32px"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"/></svg>
        </Link>
      </div>}
      <div className={styles.searchWrapper}>
        <input className={styles.inputBox} type="text" onChange={e => updateInputVal(e.target.value)} />
        <Link to={`/search?query=${inputVal}`} className={styles.searchBtn}>
          Search
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
      {pageType === "home-page" && geolocation.status === "error" && 
        <img src={weather} alt="Weather Icon" title={errorMessage} className={styles.weatherIcon} />}
    </div>;
};

export default Header;