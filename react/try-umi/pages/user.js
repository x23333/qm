import Link from 'umi/link';
import router from 'umi/router';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <button onClick={() => {
        router.goBack(); 
      }}>asdas</button>
    </div>
  );
}
