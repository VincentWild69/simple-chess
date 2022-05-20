import { Colors } from "../Colors";
import { Figure } from "./Figure";
import { Cell } from './../Cell';
import whiteLogo from '../../assets/white-king.png'
import blackLogo from '../../assets/black-king.png'
import { FigureNames } from "./FigureNames";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return true;
  }
}