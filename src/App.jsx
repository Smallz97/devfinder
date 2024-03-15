import { useSelector } from "react-redux"
import Header from "./components/headerComponent/Header"
import Search from "./components/searchComponent/Search"
import ProfileCard from "./components/profilecardComponent/ProfileCard"
import './App.css'

function App() {
  const { loading } = useSelector((state) => state.user);
  return (
    <>
      <Header />
      <Search />
      <ProfileCard />
    </>
  );
}

export default App
