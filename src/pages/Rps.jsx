import React, { useContext } from 'react'
import { RpsContext } from '../context'
import { Scissors } from "phosphor-react";
const Rps = () => {
    const 
    {
        handleClick,
        playerScore,
        computerScore,
        playerHand,
        computerHand,
        reset,
        winner,
        gameRef,
        loser,
        draw,
    } = useContext(RpsContext)
  return (
    
    <div className="wrap">
        <main className="">
            <div className="btnArea">
                <button value='Rock' onClick={(e)=>handleClick(e)}> ✊ </button>
                <button value='Paper' onClick={(e)=>handleClick(e)}> 🤚 </button>
                <button value='Scissors' onClick={(e)=>handleClick(e)}> ✌ </button>
            </div>
            <div className="hidden" ref={gameRef}>
                <div className="score">
                <div className="">{playerScore} vs {computerScore} </div>
                </div>
                <div className="picked">
                    <div className="">player: <span className=' sm'>{playerHand}</span>  computer: <span className='sm'>{computerHand}</span></div>
                    {winner&&<div className=".text-center"><span className=' sm winner'>{winner}</span></div>}
                    {loser&&<div className=".text-center"><span className=' sm loser'>{loser}</span></div>}
                    {draw&&<div className=".text-center"><span className=' sm draw'>{draw}</span></div>}
                </div>
            </div>
            <div className="reset" >
                <button onClick={()=>reset()}>🔴</button>
            </div>
        </main>
    </div>
  )
}

export default Rps