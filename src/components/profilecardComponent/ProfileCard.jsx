import { useState } from 'react'
import { useSelector } from 'react-redux'
import svgArray from '../../assets/iconArray'
import styles from './ProfileCard.module.css'
import User from '../../assets/Oval.svg'
const ProfileCard = () => {
  const { user }= useSelector((state) => state.user);
  const [searchedUser, setSearchedUSer] = useState(user);

  const profileDetails = [
    {textclass: "userName", text: searchedUser.fullname},
    {textclass: "userHandle", text: searchedUser.login},
    {textclass: "userDateJoined", text: searchedUser.dateJoined}
  ]

  const profileStats = [
    {stat: "Repos", count: searchedUser.totalRepos},
    {stat: "Followers", count: searchedUser.followers},
    {stat: "Following", count: searchedUser.following}
  ]

  const profileLinksData = [
    {Icon: svgArray[0], text: searchedUser.location},
    {Icon: svgArray[1], text: searchedUser.blog},
    {Icon: svgArray[2], text: searchedUser.twitter},
    {Icon: svgArray[3], text: searchedUser.company}
  ];

  return (
    <div className={styles.profileCard}>
      <div className={styles.userDetails}>
        <div className={styles.userImageWrap}>
          <img src={User} alt="user display image" className={styles.userImage} />
        </div>
        <div className={styles.userProfileDetails}>
          {profileDetails.map(({ textclass, text}, index) => {
            return (
              <p key={index} className={textclass}>{text}</p>
            );
          })}
        </div>
      </div>
      <p className={styles.profileDescription}>
        {searchedUser.bio}
      </p>
      <div className={styles.profileStats}>
        {profileStats.map(({ stat, count}, index) => {
          return (
            <div key={index}>
              <p>{stat}</p>
              <p>{count}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.profileLinks}>
        {profileLinksData.map(({ Icon, text }, index) => {
          return (
            <div key={index} className={styles.link}>
              <Icon />
              {text === searchedUser.blog ? <p className={text ? styles.available : styles.unavailable}><a href={text}>{text ? text : "Not available"}</a></p> : <p className={text ? styles.available : styles.notavailable}>{text ? text : "Not available"}</p>} 
              
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ProfileCard