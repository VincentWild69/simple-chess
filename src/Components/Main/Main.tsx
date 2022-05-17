import s from './Main.module.scss';
import { BoardComponent } from '../BoardComponent/BoardComponent';

export const Main: React.FC = () => {

  return (
    <main className={s.main}>
      <BoardComponent />
    </main>
  )
}