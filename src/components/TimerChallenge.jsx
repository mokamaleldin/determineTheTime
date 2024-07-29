import React, { useState, useRef } from 'react';
import ResultModel from './ResultModel';
export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef(null);

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerActive, setTimerActive] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
        setTimerActive(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
        timer.current = null;
    }

    return (
        <>
            { timerExpired &&
                <ResultModel result="lost" targetTime={ targetTime } />
            }
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