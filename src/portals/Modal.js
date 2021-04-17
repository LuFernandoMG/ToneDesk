import ReactDOM from 'react-dom';
import '../assets/styles/components/Portals.scss';
import close from '../assets/icons/close.svg';

const Modal = ({ children, isOpen, onClose }) => {

  function handleCloseModal(e) {
    onClose(e.target.isOpen);
  }

  if (!isOpen) {
    return null;
  }

  return (
    ReactDOM.createPortal(
      <div className='Modal'>
        <div className='Modal__container'>
          <button onClick={handleCloseModal} type='button' className='Modal__close--button'>
            <img src={close} alt='cierra el popup' />
          </button>
          {children}
        </div>
      </div>,
      document.getElementById('modal'),
    )
  );

};

export default Modal;
