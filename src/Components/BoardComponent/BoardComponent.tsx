import { CellComponent } from '../CellComponent/CellComponent';
import s from './BoardComponent.module.scss';
import { Board } from './../../Models/Board';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Cell } from './../../Models/Cell';
import { Player } from './../../Models/Player';

interface IBoardComponent {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

export const BoardComponent: React.FC<IBoardComponent> = ({board, setBoard, currentPlayer, swapPlayer}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const onClickCell = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure && cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  const highlightCells = () => {
    board.highlihtCells(selectedCell);
    updateBoard();
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <div className={s.boardWrapper}>
      <div className={s.board}>
        {board.cells.map((row, index) => 
          <React.Fragment key={index}>
            {row.map(cell => 
              <CellComponent 
              key={cell.id}
              cell={cell}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              onClickCell={onClickCell}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}