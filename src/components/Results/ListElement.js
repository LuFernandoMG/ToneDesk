import { useState } from 'react';
import Artist from '../../portals/Artist';
import Label from '../../portals/Label';
import Master from '../../portals/Master';
import Modal from '../../portals/Modal';
import Release from '../../portals/Release';

const ListElement = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <tr onClick={handleOpen}>
                <td className='n'>
                    <p>{data.country}</p>
                </td>
                <td className='title'>
                    <p>{data.title}</p>
                </td>
                <td className='type'>
                    <p>{data.type}</p>
                </td>
                <td className='year'>
                    <p>{data.year}</p>
                </td>
            </tr>
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
        </>
    )
}

export default ListElement;
