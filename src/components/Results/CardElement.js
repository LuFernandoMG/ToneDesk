import { useState } from 'react';
import Modal from '../../portals/Modal';
import Artist from '../../portals/Artist';
import Release from '../../portals/Release';
import Master from '../../portals/Master';
import Label from '../../portals/Label';
import '../../assets/styles/components/CardElement.scss'

const CardElement = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div className="col-2" key={data.id}>
            <div className="card" onClick={handleOpen}>
                <div className="card__img">
                    <img src={data.cover_image} alt={data.title} />
                </div>
                <div className="card__info">
                    <div className="card__info--left">
                        <h3>{data.title}</h3>
                        <p>{data.year} - {data.type}</p>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={handleClose}>
                {
                    data.type === 'label' ?
                        <Label data={data} /> :
                        data.type === 'master' ?
                            <Master data={data} /> :
                            data.type === 'artist' ?
                                <Artist data={data} /> :
                                <Release data={data} />
                }
            </Modal>
        </div>
    )

}

export default CardElement;
