import { Colors } from "../Colors";
import { Figure } from "./Figure";
import { Cell } from './../Cell';
import whiteLogo from '../../assets/white-pawn.png'
import blackLogo from '../../assets/black-pawn.png'
import { FigureNames } from "./FigureNames";

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }
}