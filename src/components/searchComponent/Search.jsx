import { useEffect, useState } from "react"
import { fetchUsers } from "../../app/userSlice";
import SearchIcon from "../../assets/icons/searchIcon"
import { useDispatch, useSelector } from "react-redux";
import styles from "./Search.module.css"
const Search = () => {
  const { notFound } = useSelector((state) => state.user);
  const [userToSearch, setUserToSearch] = useState("octocat");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
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
          type="search"
          value={userToSearch}
          className={styles.inputBar}
          placeholder="Search GitHub username…"
          onChange={(e) => setUserToSearch(e.target.value)}
        />
        <div className={styles.icon}>
          <SearchIcon />
        </div>
        <p className={`${styles.errorMessage} ${notFound ? styles.showErrorMessage : styles.hideErrorMessage}`}>No results</p>
        <button className={styles.button} type="submit">Search</button>
      </div>
    </form>
  )
}

export default Search
