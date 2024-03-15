import { useSelector } from 'react-redux'
import svgArray from '../../app/iconsArray'
import styles from './ProfileCard.module.css'
const ProfileCard = () => {
  const { user, loading, notFound } = useSelector((state) => state.user);

  const date = user.dateJoined;
  const parsedDate = new Date(date);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let year = parsedDate.getFullYear();
  let month = parsedDate.getMonth();
  let day = parsedDate.getDate();

  let formattedDate = "joined" + " " + (day < 10 ? "0" : "") + day + " " + monthNames[month] + " " + year;

  const profileDetails = [
    { textclass: "userName", text: user.fullname },
    { textclass: "userHandle", text: user.login },
    { textclass: "userDateJoined", text: formattedDate }
  ]

  const profileStats = [
    { stat: "Repos", count: user.totalRepos },
    { stat: "Followers", count: user.followers },
    { stat: "Following", count: user.following }
  ]

  const profileLinksData1 = [
    { Icon: svgArray[0], text: user.location },
    { Icon: svgArray[1], text: user.blog },
  ];

  const profileLinksData2 = [
    { Icon: svgArray[2], text: user.twitter },
    { Icon: svgArray[3], text: user.company }
  ]

  const renderProfileDetails = ({ textclass, text }, index) => {
    const modifiedText = `@${text}`
    return (
      <p key={index} className={styles[textclass]}>{index === 1 ? modifiedText : text}</p>
    );
  }

  const renderProfileStats = ({ stat, count }, index) => {
    return (
      <div key={index}>
        <p className={styles.stat}>{stat}</p>
        <p className={styles.count}>{count}</p>
      </div>
    );
  }

  const renderProfileLink = ({ Icon, text }, index) => {
    return (
      <div key={index} className={styles.linkItem}>
        <Icon />
        {text === user.blog ? <p><a href={text} className={text ? "" : styles.opacity}>{text ? text : "Not available"}</a></p> : <p className={text ? "" : styles.opacity}>{text ? text : "Not available"}</p>}
      </div>
    );
  }

  return (
    <>
      {loading
        ? <div className={styles.loadingCard}><p className={styles.loadingText}>Loading User ...</p></div>
        : notFound
          ? <div className={styles.loadingCard}><p className={styles.notFound}>User doesn't exist</p></div>
          : <div className={styles.profileCard}>
            <div className={styles.userDetails}>
              <div className={styles.userImageWrap}>
                <img src={user.avatar} alt="user image" className={styles.userImage} />
              </div>
              <div className={styles.userProfileDetails}>
                {profileDetails.map(renderProfileDetails)}
              </div>
            </div>
            <p className={user.bio ? styles.profileDescription : styles.noProfileDescription}>
              {user.bio ? user.bio : "This profile has no bio"}
            </p>
            <div className={styles.profileStats}>
              {profileStats.map(renderProfileStats)}
            </div>
            <div className={styles.profileLinks}>
              <div className={styles.first}>
                {profileLinksData1.map(renderProfileLink)}
              </div>
              <div className={styles.second}>
                {profileLinksData2.map(renderProfileLink)}
              </div>
            </div>
          </div>
      }
    </>
  );
}

export default ProfileCard