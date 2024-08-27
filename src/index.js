import React from "react";
import ReactDOM from "react-dom";
import Chessboard from "./ChessBoard";
function MyChessBoard()
{
  return(
    <div>
      <Chessboard/>
    </div>
  )
}
ReactDOM.render(<MyChessBoard/>,document.getElementById("root"));