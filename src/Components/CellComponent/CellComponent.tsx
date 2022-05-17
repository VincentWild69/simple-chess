import clsx from 'clsx';
import { Cell } from '../../Models/Cell';
import s from './CellComponent.module.scss';

interface ICellComponent {
  cell: Cell;
}

export const CellComponent: React.FC<ICellComponent> = ({cell}) => {
  return (
    <div className={clsx(s.cell, s[cell.color])}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt="figure" />}
    </div>
  );
}