import '../../assets/styles/components/InputText.scss';

const InputText = ({ type, placeholder, name }) => {
    return (
        <input className='InputText' type={type} name={name} placeholder={placeholder} />
    )
}

export default InputText;
