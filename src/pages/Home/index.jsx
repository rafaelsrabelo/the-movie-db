import { Header } from "../../components/Header";
import { Popular } from "../../components/Popular";
import styles from './styles.module.css'

export default function Home() {

  return (
    <div className="container">
      <Header />
      <Popular />
    </div>
  )
}
