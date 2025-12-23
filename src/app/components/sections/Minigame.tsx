"use client";
import React, { useState, useEffect } from 'react';

const Minigame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isThinking, setIsThinking] = useState(false);

  const calculateWinner = (squares: any[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }
    return null;
  };

  const minimax = (squares: any[], depth: number, isMaximizing: boolean): number => {
    const winner = calculateWinner(squares);
    if (winner === 'O') return 10 - depth;
    if (winner === 'X') return depth - 10;
    if (squares.every(s => s !== null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'O';
          const score = minimax(squares, depth + 1, false);
          squares[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'X';
          const score = minimax(squares, depth + 1, true);
          squares[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const getBestMove = (squares: any[]) => {
    let bestScore = -Infinity;
    let move = -1;
    for (let i = 0; i < 9; i++) {
      if (!squares[i]) {
        squares[i] = 'O';
        const score = minimax(squares, 0, false);
        squares[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(s => s);

  useEffect(() => {
    if (!isXNext && !winner && !isDraw) {
      setIsThinking(true);
      const timer = setTimeout(() => {
        const bestMove = getBestMove([...board]);
        if (bestMove !== -1) {
          const nextBoard = board.slice();
          nextBoard[bestMove] = 'O';
          setBoard(nextBoard);
          setIsXNext(true);
        }
        setIsThinking(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isXNext, board, winner, isDraw]);

  const handleClick = (i: number) => {
    if (winner || board[i] || !isXNext) return;
    const nextBoard = board.slice();
    nextBoard[i] = 'X';
    setBoard(nextBoard);
    setIsXNext(false);
  };

  return (
    <div id='game' className="w-full max-w-md mx-auto p-6 bg-gray-900/50 border border-gray-800 rounded-3xl shadow-xl backdrop-blur-sm">
      <h3 className="text-center text-white text-xl mb-4 font-bold tracking-tighter uppercase">
        Beat the Unbeatable Bot 🤖
      </h3>

      <div className="text-center mb-6 h-8 text-lg font-medium">
        {winner ? (
          <span className={winner === 'X' ? 'text-green-400' : 'text-red-500'}>
            {winner === 'X' ? 'ТА ЯЛЛАА! 🏆' : 'БОТ ЯЛЛАА! 🤖'}
          </span>
        ) : isDraw ? (
          <span className="text-yellow-400">ТЭНЦЛЭЭ! 🤝</span>
        ) : (
          <span className="text-gray-400">
            {isXNext ? 'Таны ээлж (X)' : 'Бот тооцоолж байна...'}
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {board.map((square, i) => (
          <button 
            key={i} 
            onClick={() => handleClick(i)} 
            className={`w-full aspect-square bg-gray-800/80 border border-gray-700 rounded-2xl text-3xl font-black flex items-center justify-center transition-all
              ${!square && isXNext && !winner ? 'hover:border-blue-500 hover:bg-gray-700 active:scale-95' : ''}
              ${square === 'X' ? 'text-blue-400' : 'text-red-500'}`}
          >
            {square}
          </button>
        ))}
      </div>

      <button 
        onClick={() => { setBoard(Array(9).fill(null)); setIsXNext(true); }} 
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
      >
        Тоглоомыг шинэчлэх
      </button>
    </div>
  );
};

export default Minigame;