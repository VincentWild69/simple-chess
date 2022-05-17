import { CellComponent } from '../CellComponent/CellComponent';
import s from './BoardComponent.module.scss';
import { Board } from './../../Models/Board';
import React from 'react';

interface IBoardComponent {
  board: Board;
  setBoard: (board: Board) => void;
}

export const BoardComponent: React.FC<IBoardComponent> = ({board, setBoard}) => {
  return (
    <div className={s.boardWrapper}>
      <div className={s.board}>
        {board.cells.map((row, index) => 
          <React.Fragment key={index}>
            {row.map(cell => 
              <CellComponent key={cell.id} cell={cell} />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}