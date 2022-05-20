import s from './LostFigures.module.scss';
import { Figure } from './../../Models/Figures/Figure';

interface ILostFigures {
  title: string;
  figures: Figure[];
}

export const LostFigures: React.FC<ILostFigures> = ({title, figures}) => {
  return (
    <div className={s.lostFigures}>
      <h4>{title}</h4>
      <div className={s.lostFiguresList}>
        {figures.length > 0 ? figures.map(figure => 
          <div key={figure.id}>
            {figure.logo && <img className={s.lostFigureImg} src={figure.logo} alt="figure"/>}
            {figure.name && <div className={s.lostFigureName}>{figure.name}</div>}
          </div>
        ) : 'none'}
      </div>
    </div>
  );
}