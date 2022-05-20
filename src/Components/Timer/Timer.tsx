import s from './Timer.module.scss';
import { Player } from './../../Models/Player';
import { useState, useEffect, useRef } from 'react';

interface ITimer {
  player: Player | null;
  currentPlayer: Player | null;
}

export const Timer: React.FC<ITimer> = ({player, currentPlayer}) => {
  const [time, setTime] = useState<number>(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  const decTimer = () => {
    setTime(prev => prev - 1);
  }

  const startTimer = () => {
    timer.current = setInterval(decTimer, 1000)
  }

  useEffect(() => {
    if (timer.current) {
      clearInterval(timer.current)
    }
    if (currentPlayer?.color === player?.color) {
      startTimer();
    }
  }, [currentPlayer])

  return (
    <div className={s.timer}>
      <span
        className={s.playerName}
        style={{color: player?.color}}
      >
        {player?.color} player:</span><span> {time} sec</span>
    </div>
  );
}