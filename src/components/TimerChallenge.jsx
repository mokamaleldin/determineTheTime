import React, { useState, useRef } from 'react';
import ResultModel from './ResultModel';
export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef(null);
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModel ref={ dialog } onReset={ handleReset } targetTime={ targetTime } timeRemaining={ timeRemaining } />
            <section className="challenge">
                <h2>{ title }</h2>
                <p className="challenge-time">
                    { targetTime } second{ targetTime > 1 ? 's' : undefined }
                </p>
                <p>
                    <button onClick={ timerActive ? handleStop : handleStart } className="button">
                        { timerActive ? "stop" : "start" } challenge
                    </button>
                </p>
                <p className={ timerActive ? "active" : undefined }>
                    { timerActive ? "Time is running ...." : "Timer inactive" }
                </p>
            </section>
        </>
    );
}