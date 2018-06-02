import React from 'react';
import MovePrev from '../MovePrev/MovePrev';

const MovesList = (props) => {
    const renderMoves = () => {
        return (
           <ul>
               {props.user.moves.map((move,i)=>{
                  return( <MovePrev key={i} move={move} />) 
                })} 
           </ul>    
        )
    }
   
    return (
        <div>
            {renderMoves()}
        </div>
    );
 }
 
 export default MovesList;