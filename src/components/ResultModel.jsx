import { forwardRef } from "react";

const ResultModel = forwardRef(function ResultModel({ result, targetTime }, ref) {
    return (
        <dialog ref={ ref } className="result-modal">
            <h2> Your { result }</h2>

            <p>
                The target time was <strong>{ targetTime } second{ targetTime > 1 ? 's' : undefined }</strong>
            </p>

            <p>
                You stopped the timer at <strong>{ result }</strong> seconds
            </p>

            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});


export default ResultModel;