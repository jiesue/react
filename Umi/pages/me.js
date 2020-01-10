
import styles from './me.css';
import router from 'umi/router';
export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page me</h1>
      <button onClick={() => { router.goBack(); }}>go back</button>
    </div>
  );
}
