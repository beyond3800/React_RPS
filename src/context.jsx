
import { createContext, useEffect, useRef, useState } from "react";

export const RpsContext = createContext(null);

export const RpsProvider = (props) => 
{
    
    const [computerScore, setComputerScore] = useState(0);
    const [playerScore, setPlayerScore] = useState(0);
    const [playerHand, setPlayerHand] = useState('');
    const [winner, setWinner] = useState('');
    const [loser, setLoser] = useState('');
    const [draw, setDraw] = useState('');
    const [computerHand, setComputerHand] = useState('');
    const gameRef = useRef(null)
    // useEffect(()=>{
    //     computerChoice()
    // },[])
    const computerChoice = () =>{
        const hand = ['Rock', 'Paper','Scissors'];
        const random = Math.floor(Math.random() * hand.length);
        const computerPicked = hand[random];
        return computerPicked;
    }
    const handleClick = (e) =>{ 
        let computerHands = computerChoice();
        const playerPick = e.target.value;
        setPlayerHand(playerPick); 
        playersHand(playerPick,computerHands);
        setComputerHand(computerHands);
        if(gameRef.current.classList.contains('hidden')){
            gameRef.current.classList.remove('hidden');
            gameRef.current.classList.add('show');
        }
    }
    const playersHand = (player,computer) =>{
        // human wins - getResult('Rock', 'Scissors') 👉 1
        // human loses - getResult('Scissors', 'Rock') 👉 -1
        // human draws - getResult('Rock', 'Rock') 👉 0

        if(player == computer || computer == player){
            setComputerScore(prev=> prev + 0);
            setPlayerScore(prev=> prev + 0);
            setDraw('draw');
            setWinner('')
            setLoser('')
        }
        else if(player == 'Rock' && computer == 'Scissors'){
            setPlayerScore(prev=> prev + 1);
            setWinner('you win');
            setLoser('')
            setDraw('')
        }
        else if(player == 'Scissors' && computer == 'Paper'){
            setPlayerScore(prev=> prev + 1);
            setWinner('you win');
            setLoser('')
            setDraw('')
        }
        else if(player == 'Paper' && computer == 'Rock'){
            setPlayerScore(prev=> prev + 1);
            setWinner('you win');
            setLoser('')
            setDraw('')
        }
        else{
            setComputerScore(prev=> prev + 1);
            setLoser('you lose')
            setWinner('')
            setDraw('')
        }
    }
    const reset = () => {
        setComputerScore(0);
        setPlayerScore(0);
        setPlayerHand('');
        setComputerHand('');
        setWinner('');
        if(gameRef.current.classList.contains('show')){
            gameRef.current.classList.remove('show');
            gameRef.current.classList.add('hidden');
        }
    }
    const context = 
    {
        handleClick,
        computerScore,
        playerScore,
        computerHand,
        playerHand,
        computerChoice,
        winner,
        reset,
        gameRef,
        loser,
        draw,
    }
    return (
        <RpsContext.Provider value={context}>
            {props.children}
        </RpsContext.Provider>
    )
}