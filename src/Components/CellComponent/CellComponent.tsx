import clsx from 'clsx';
import { Cell } from '../../Models/Cell';
import s from './CellComponent.module.scss';

interface ICellComponent {
  cell: Cell;
  selected: boolean;
  onClickCell: (cell: Cell) => void;
}

export const CellComponent: React.FC<ICellComponent> = ({cell, selected, onClickCell}) => {
  return (
    <div 
      onClick={() => onClickCell(cell)}
      className={clsx(s.cell, s[cell.color], {[s.selected]: selected, [s.availableAtack]: cell.available && cell.figure})}
    >
      {cell.figure?.logo && <img src={cell.figure.logo} alt="figure" />}
      {cell.available && !cell.figure && <div className={s.available}></div>}
    </div>
  );
}