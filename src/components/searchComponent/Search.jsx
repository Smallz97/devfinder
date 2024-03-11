import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../app/userSlice";
import styles from "./Search.module.css"
const Search = () => {
  const [userToSearch, setUserToSearch] = useState("octocat");

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userToSearch.trim() === '') return;
    dispatch(fetchUsers(userToSearch));
  }

  useEffect(() => {
    dispatch(fetchUsers(userToSearch));
  }, [])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.searchWrapper}>
        <label htmlFor="search"></label>
        <input 
          id="search"
          value={userToSearch}
          type="search"
          className={styles.inputBar}
          placeholder="Search GitHub username…"
          onChange={(e) => setUserToSearch(e.target.value)}
        />
        <i className={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path fill-rule="evenodd" clipRule="evenodd" d="M8.84055 0C3.96592 0 0 3.95507 0 8.81643C0 13.6778 3.96596 17.6329 8.84055 17.6329C11.0135 17.6329 13.0059 16.8469 14.5469 15.5452L18.8125 19.7891C18.9541 19.9297 19.1386 20 19.3236 20C19.5099 20 19.6959 19.9287 19.8374 19.7865C20.1195 19.5026 20.1183 19.0439 19.8348 18.7616L15.5744 14.5229C16.8877 12.9839 17.6811 10.9908 17.6811 8.81643C17.6811 3.95507 13.7152 0 8.84055 0ZM14.1121 13.9754C15.4225 12.6453 16.2318 10.8233 16.2318 8.81639C16.2318 4.75407 12.9161 1.44923 8.84055 1.44923C4.76495 1.44923 1.44927 4.75407 1.44927 8.81639C1.44927 12.8785 4.76495 16.1835 8.84055 16.1835C10.8469 16.1835 12.6691 15.3826 14.0022 14.0847C14.0175 14.0658 14.0339 14.0475 14.0514 14.03C14.0709 14.0104 14.0911 13.9922 14.1121 13.9754Z" fill="#0079FF" />
          </svg>
        </i>
        <button className={styles.button} type="submit">Search</button>
      </div>
    </form>
  )
}

export default Search
