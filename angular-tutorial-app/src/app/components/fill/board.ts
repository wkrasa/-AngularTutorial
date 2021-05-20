export interface Cell{
  isVisited: boolean;
  x: number;
  y: number;
}

export interface Row{
  cells: Cell[];
  y: number;
}

export class Board{
  rows: Row[] = [];
  constructor(public height: number, public width: number){

  }

  static create(width: number, height: number): Board{
      let boad = new Board(height, width);
      for(let i=0;i<height; ++i){
        const row:Row = { cells: [], y: i };
        boad.rows.push(row);
        for(let j=0;j<width;++j){
            row.cells.push({ isVisited: false, x: j, y: i })
        }
      }

      return boad;
  }

  getRow(y: number): Row{
    return this.rows[y];
  }

  getCell(x: number, y: number): Cell{
    return this.rows[y].cells[x];
  }

  visit(cell: Cell){
    cell.isVisited = true;
  }

  swap(cell: Cell){
    cell.isVisited = !cell.isVisited;
  }

  visitXY(x: number, y: number){
    this.getCell(x,y).isVisited = true;
  }

  isRowVisited(y: number){
    return this.rows[y].cells.filter(cell => !!cell.isVisited).length === 0;
  }

  isAllVisited(){
    this.rows.filter(row => !this.isRowVisited(row.y)).length === 0;
  }
}
