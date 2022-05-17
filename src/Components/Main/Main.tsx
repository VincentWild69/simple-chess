import s from './Main.module.scss';
import { BoardComponent } from '../BoardComponent/BoardComponent';
import { Board } from './../../Models/Board';
import { useEffect, useState } from 'react';

export const Main: React.FC = () => {
  const [board, setBoard] = useState(new Board());

  const restart = (): void => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  useEffect(() => {
    restart();
  }, [])

  return (
    <main className={s.main}>
      <BoardComponent board={board} setBoard={setBoard}/>
    </main>
  )
}