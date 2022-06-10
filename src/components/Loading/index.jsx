import styles from './styles.module.css'
import loading from '../../assets/loading.svg'

export function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src={loading} alt="Carregando" />
    </div>
  )
}