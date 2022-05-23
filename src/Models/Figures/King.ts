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
    if (target.y === this.cell.y + 1 &&
      (target.x === this.cell.x 
        || target.x === this.cell.x + 1 
        || target.x === this.cell.x - 1)) {
      return true;
    }
    if (target.y === this.cell.y - 1 &&
      (target.x === this.cell.x 
        || target.x === this.cell.x + 1 
        || target.x === this.cell.x - 1)) {
      return true;
    }
    if (target.x === this.cell.x + 1 && target.y === this.cell.y) {
      return true;
    }
    if (target.x === this.cell.x - 1 && target.y === this.cell.y) {
      return true;
    }

    const absX = Math.abs(target.x - this.cell.x);
    const absY = Math.abs(target.y - this.cell.y);

    if(absY !== absX)
    return false;

    return false;
  }
}