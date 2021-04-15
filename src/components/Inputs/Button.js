import '../../assets/styles/components/Button.scss'

const Button = ({ type, message, handler }) => {

    const handleClick = () => {
        handler()
    }

    return (
        <button className={`button ${type}`} onClick={handleClick}>
            {message}
        </button>
    )
}

export default Button;
