import React from 'react';
import { FaChessRook } from "react-icons/fa";
import { GiChessBishop } from "react-icons/gi";
import { FaChessKnight } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa6";
import { FaRegChessBishop } from "react-icons/fa6";
import { TbChessRook } from "react-icons/tb";
import { TbChessKnight } from "react-icons/tb";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaRegChessKing } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa";
import './ChessBoard.css'
function Chessboard() {
    return (
        <div>
            <table>
                <tr>
                    <td className='light'><FaChessRook /></td>
                    <td className='dark'><FaChessKnight /></td>
                    <td className='light'><GiChessBishop /></td>
                    <td className='dark'><FaChessQueen /></td>
                    <td className='light'><FaChessKing /></td>
                    <td className='dark'><GiChessBishop /></td>
                    <td className='light'><FaChessKnight /></td>
                    <td className='dark'><FaChessRook /></td> 
                </tr>
                <tr>
                    <td className='dark'><FaChessBishop /></td>
                    <td className='light'><FaChessBishop /></td>
                    <td className='dark'><FaChessBishop /></td>
                    <td className='light'><FaChessBishop /></td>
                    <td className='dark'><FaChessBishop /></td>
                    <td className='light'><FaChessBishop /></td>
                    <td className='dark'><FaChessBishop /></td>
                    <td className='light'><FaChessBishop /></td> 
                </tr>
                <tr>
                    <td className='light'></td>
                    <td className='dark'></td>
                    <td className='light'></td>
                    <td className='dark'></td>
                    <td className='light'></td>
                    <td className='dark'></td>
                    <td className='light'></td>
                    <td className='dark'></td> 
                </tr>
                <tr>
                    <td className='dark'></td>
                    <td className='light'></td>
                    <td className='dark'></td>
                    <td className='light'></td>
                    <td className='dark'></td>
                    <td className='light'></td>
                    <td className='dark'></td>
                    <td className='light'></td> 
                </tr>
                <tr>
                    <td className='light'></td>
                    <td className='dark'></td>
                    <td className='light'></td>
                    <td className='dark'></td>
                    <td className='light'></td>
                    <td className='dark'></td>
                    <td className='light'></td>
                    <td className='dark'></td> 
                </tr>
                <tr>
                    <td className='dark'></td>
                    <td className='light'></td>
                    <td className='dark'></td>
                    <td className='light'></td>
                    <td className='dark'></td>
                    <td className='light'></td>
                    <td className='dark'></td>
                    <td className='light'></td> 
                </tr>
                <tr>
                    <td className='light'><FaRegChessBishop /></td>
                    <td className='dark'><FaRegChessBishop /></td>
                    <td className='light'><FaRegChessBishop /></td>
                    <td className='dark'><FaRegChessBishop /></td>
                    <td className='light'><FaRegChessBishop /></td>
                    <td className='dark'><FaRegChessBishop /></td>
                    <td className='light'><FaRegChessBishop /></td>
                    <td className='dark'><FaRegChessBishop /></td> 
                </tr>
                <tr>
                    <td className='dark'><TbChessRook /></td>
                    <td className='light'><TbChessKnight /></td>
                    <td className='dark'><GiChessBishop /></td>
                    <td className='light'><FaRegChessQueen /></td>
                    <td className='dark'><FaRegChessKing /></td>
                    <td className='light'><GiChessBishop /></td>
                    <td className='dark'><TbChessKnight /></td>
                    <td className='light'><TbChessRook /></td> 
                </tr>
            </table>
        </div>
    );
}

export default Chessboard;