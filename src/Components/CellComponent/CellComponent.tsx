import clsx from 'clsx';
import s from './CellComponent.module.scss';

interface ICellComponent {
  color: string;
}

export const CellComponent: React.FC<ICellComponent> = ({color}) => {
  return (
    <div className={clsx(s.cell, s[color])}>
      cell
    </div>
  );
}