"use client";
import React, { useState, useEffect } from 'react';

const Minigame = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isThinking, setIsThinking] = useState(false);

  const calculateWinner = (squares: (string | null)[]) => {
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

  const minimax = (squares: (string | null)[], depth: number, isMaximizing: boolean): number => {
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

  const getMove = (squares: (string | null)[]) => {
    const isRandomMove = Math.random() < 0.2; 
    
    const availableMoves = squares.map((v, i) => v === null ? i : null).filter(v => v !== null) as number[];

    if (isRandomMove) {
      return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

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
        const move = getMove([...board]);
        if (move !== -1) {
          const nextBoard = board.slice();
          nextBoard[move] = 'O';
          setBoard(nextBoard);
          setIsXNext(true);
        }
        setIsThinking(false);
      }, 600);
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
    <div className="w-full max-w-md mx-auto p-8 bg-slate-900 border border-slate-800 rounded-[2rem] shadow-2xl">
      <h3 className="text-center text-white text-2xl mb-2 font-black tracking-tight uppercase italic">
        Tic-Tac-Toe <span className="text-blue-500">Pro</span>
      </h3>
      <p className="text-center text-slate-500 text-sm mb-6">Бот заримдаа алдаа гаргаж магадгүй...</p>

      <div className="text-center mb-8 h-10 flex items-center justify-center">
        {winner ? (
          <div className={`px-6 py-1 rounded-full text-lg font-bold animate-bounce ${winner === 'X' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
            {winner === 'X' ? 'ТА ЯЛЛАА! 🏆' : 'БОТ ЯЛЛАА! 🤖'}
          </div>
        ) : isDraw ? (
          <div className="px-6 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-lg font-bold">ТЭНЦЛЭЭ! 🤝</div>
        ) : (
          <div className="text-slate-400 font-medium">
            {isXNext ? 'Таны ээлж (X)' : 'Бот бодож байна...'}
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {board.map((square, i) => (
          <button 
            key={i} 
            onClick={() => handleClick(i)} 
            disabled={!!square || !isXNext || !!winner}
            className={`w-full aspect-square bg-slate-800/50 border-2 border-slate-700/50 rounded-2xl text-4xl font-black flex items-center justify-center transition-all duration-200
              ${!square && isXNext && !winner ? 'hover:border-blue-500/50 hover:bg-slate-700/50 active:scale-90' : ''}
              ${square === 'X' ? 'text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]'}`}
          >
            {square}
          </button>
        ))}
      </div>

      <button 
        onClick={() => { setBoard(Array(9).fill(null)); setIsXNext(true); }} 
        className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all active:scale-95 shadow-lg"
      >
        Дахин эхлэх
      </button>
    </div>
  );
};

export default Minigame;