import CardElement from './CardElement';


const GridContainer = ({ results }) => {
    return (
        <>
            <div className="row centered">
                {results.map((result) => {
                    return <CardElement key={result.id} data={result} />
                })}
            </div>
        </>
    );
}

export default GridContainer;