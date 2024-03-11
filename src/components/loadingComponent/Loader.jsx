import { useEffect, useState } from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  const [text, setText] = useState('Fetching User ....');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText('Loading User ...');
    }, 200);

    return () => clearTimeout(timeout);
  });

  return (
    <div className={styles.loading}>
      <div className={styles.text}>
        {text}
      </div>
    </div>
  )
}

export default Loader
