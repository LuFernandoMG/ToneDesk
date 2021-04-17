import { useDispatch, useSelector } from 'react-redux';
import { addToCollection, addToWishlist, updateUser, removeFromCollection, removeFromWishlist } from '../backend/firebaseMethods';
import { setActiveUser } from '../backend/userSlice';
import folderE from '../assets/icons/folderEmpty.svg'
import folder from '../assets/icons/folder.svg'
import heartE from '../assets/icons/heartEmpty.svg'
import heart from '../assets/icons/heart.svg'
import link from '../assets/icons/link.svg'

const Label = ({ data }) => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleCollection = () => {
        if (hasInCollection.length > 0) {
            removeFromCollection(user.uid, data)
                .then(() => {
                    updateUser(user.uid)
                        .then((res) => {
                            dispatch(setActiveUser(res))
                        })
                })
        } else {
            addToCollection(user.uid, data)
                .then(() => {
                    updateUser(user.uid)
                        .then((res) => {
                            dispatch(setActiveUser(res))
                        })
                })
        }
    }

    const handleWishlist = () => {
        if (hasInWishlist.length > 0) {
            removeFromWishlist(user.uid, data)
                .then(() => {
                    updateUser(user.uid)
                        .then((res) => {
                            dispatch(setActiveUser(res))
                        })
                })
        } else {
            addToWishlist(user.uid, data)
                .then(() => {
                    updateUser(user.uid)
                        .then((res) => {
                            dispatch(setActiveUser(res))
                        })
                })
        }
    }

    const hasInCollection = user.collection.filter((obj) => {
        return obj.id === data.id
    })

    const hasInWishlist = user.wishlist.filter((obj) => {
        return obj.id === data.id
    })

    return (
        <div className='Label'>
            <div className="Label__title">
                <small>Label</small>
                <h2>
                    <a href={`https://discogs.com${data.uri}`} rel='noreferrer' target="_blank">
                        <img src={link} alt="more info" />
                    </a>
                    {data.title}
                </h2>
            </div>
            <div className="Label__img">
                <img src={data.cover_image} alt="" />
            </div>
            <div className="Label__buttons">
                <button type='button' onClick={handleCollection}>
                    <img src={hasInCollection.length > 0 ? folder : folderE} alt="add to collection" />
                </button>
                <button type='button' onClick={handleWishlist}>
                    <img src={hasInWishlist.length > 0 ? heart : heartE} alt="add to wishlist" />
                </button>
            </div>
        </div>
    );
}

export default Label;