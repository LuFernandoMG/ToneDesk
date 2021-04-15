import '../../assets/styles/components/RoundedButton.scss';

const RoundedButton = ({ type, handler, img}) => {
    return (
        <button type='button' onClick={handler} className={`RoundedButton ${type}`}>
            <img src={img} alt={type} />
        </button>
    )
}

export default RoundedButton;
