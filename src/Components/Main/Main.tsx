import s from './Main.module.scss';
import { BoardComponent } from '../BoardComponent/BoardComponent';
import { Board } from './../../Models/Board';
import { useEffect, useState } from 'react';
import { Player } from './../../Models/Player';
import { Colors } from '../../Models/Colors';
import { LostFigures } from '../LostFigures/LostFigures';
import { Timer } from '../Timer/Timer';

export const Main: React.FC = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState<Player>(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState<Player>(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  const restart = (): void => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  }

  useEffect(() => {
    restart();
  }, [])

  return (
    <main className={s.main}>
      <div className={s.restart}><button onClick={() => restart()}>Restart game</button></div>
      <div className={s.curentPlayer}>
        Current player: <span style={{color: currentPlayer?.color}}>{currentPlayer?.color}</span>
      </div>
      <div className={s.timers}>
        <Timer boardId={board.id} currentPlayer={currentPlayer} player={whitePlayer}/>
        <Timer boardId={board.id} currentPlayer={currentPlayer} player={blackPlayer}/>
      </div>
      <BoardComponent board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <LostFigures title="Lost black figures:" figures={board.lostBlackFigures} />
      <LostFigures title="Lost white figures:" figures={board.lostWhiteFigures} />
    </main>
  )
}