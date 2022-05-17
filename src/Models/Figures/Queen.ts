import { Colors } from "../Colors";
import { Figure } from "./Figure";
import { Cell } from './../Cell';
import whiteLogo from '../../assets/white-queen.png'
import blackLogo from '../../assets/black-queen.png'
import { FigureNames } from "./FigureNames";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }
}