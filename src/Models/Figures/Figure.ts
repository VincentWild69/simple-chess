import { Colors } from "../Colors";
import logo from '../../assets/black-bishop.png'
import { Cell } from './../Cell';
import { v4 as uuidv4 } from 'uuid';
import { FigureNames } from "./FigureNames";

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: string;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = uuidv4();
  }

  canMove(target: Cell): boolean {
    return true;
  }

  moveFigure(target: Cell) {
    
  }
}