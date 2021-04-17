const Fatal = ({ message }) => {
    return (
        <div className="Modal">
            <div className="Fatal">
                <h2>
                    Something went <span>wrong</span>, we had the next error: <span>{message}</span>
                </h2>
            </div>
        </div>
    );
}

export default Fatal;