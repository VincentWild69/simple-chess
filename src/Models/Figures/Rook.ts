import { Colors } from "../Colors";
import { Figure } from "./Figure";
import { Cell } from './../Cell';
import whiteLogo from '../../assets/white-rook.png'
import blackLogo from '../../assets/black-rook.png'
import { FigureNames } from "./FigureNames";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }
}