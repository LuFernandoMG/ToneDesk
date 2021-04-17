import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser } from '../backend/userSlice';
import { setAddToCollection, setAddToWishlist, setRemoveFromCollection, setRemoveFromWishlist, getUpdatedUser } from '../backend/statusSlice';
import Loader from '../components/Loader';
import Fatal from '../components/Fatal';
import folderE from '../assets/icons/folderEmpty.svg'
import folder from '../assets/icons/folder.svg'
import heartE from '../assets/icons/heartEmpty.svg'
import heart from '../assets/icons/heart.svg'
import link from '../assets/icons/link.svg'

const Artist = ({ data }) => {

    const status = useSelector(state => state.status)
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleCollection = () => {
        const arr = [user.uid, data]
        if (hasInCollection.length > 0) {
            dispatch(setRemoveFromCollection(arr))
                .then(() => {
                    dispatch(getUpdatedUser(arr[0]))
                        .then((res) => {
                            dispatch(setActiveUser(res.payload))
                        })
                })
        } else {
            dispatch(setAddToCollection(arr))
                .then(() => {
                    dispatch(getUpdatedUser(arr[0]))
                        .then((res) => {
                            dispatch(setActiveUser(res.payload))
                        })
                })
        }
    }

    const handleWishlist = () => {
        const arr = [user.uid, data]
        if (hasInWishlist.length > 0) {
            dispatch(setRemoveFromWishlist(arr))
                .then(() => {
                    dispatch(getUpdatedUser(arr[0]))
                        .then((res) => {
                            dispatch(setActiveUser(res.payload))
                        })
                })
        } else {
            dispatch(setAddToWishlist(arr))
                .then(() => {
                    dispatch(getUpdatedUser(arr[0]))
                        .then((res) => {
                            dispatch(setActiveUser(res.payload))
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

    if (status.loading) {
        return <Loader />
    }

    if (status.error) {
        return <Fatal message={status.error} />
    }

    return (
        <div className='Artist'>
            <div className="Artist__title">
                <small>Artist</small>
                <h2>
                    <a href={`https://discogs.com${data.uri}`} rel='noreferrer' target="_blank">
                        <img src={link} alt="more info" />
                    </a>
                    {data.title}
                </h2>
            </div>
            <div className="Artist__img">
                <img src={data.cover_image} alt="" />
            </div>
            <div className="Artist__buttons">
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

export default Artist;