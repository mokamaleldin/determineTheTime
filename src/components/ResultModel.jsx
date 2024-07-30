import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(function ResultModel({ targetTime, timeRemaining, onReset }, ref) {
    const dialog = useRef();
    const userLost = timeRemaining <= 0;

    const formattedTime = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open: () => dialog.current.showModal(),
        };
    });

    return (
        <dialog ref={ dialog } className="result-modal" onClose={ onReset }>
            { userLost && <h2> Your lost</h2> }
            { !userLost && <h2> Your score: { score }%</h2> }

            <p>
                The target time was <strong>{ targetTime } second{ targetTime > 1 ? 's' : undefined }</strong>
            </p>

            <p>
                You stopped the timer at <strong>{ formattedTime } seconds letf.</strong> 
            </p>

            <form method="dialog" onSubmit={ onReset }>
                <button>Close</button>
            </form>
        </dialog>
    );
});


export default ResultModel;