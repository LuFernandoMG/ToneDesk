import { useDispatch, useSelector } from 'react-redux';
import { addToCollection, addToWishlist, updateUser, removeFromCollection, removeFromWishlist } from '../backend/firebaseMethods';
import { setActiveUser } from '../backend/userSlice';
import folderE from '../assets/icons/folderEmpty.svg'
import folder from '../assets/icons/folder.svg'
import heartE from '../assets/icons/heartEmpty.svg'
import heart from '../assets/icons/heart.svg'
import link from '../assets/icons/link.svg'

const Master = ({ data }) => {

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
        <div className="Master">
            <div className="Master__left">
                <div className="Master__left--title">
                    <small>Master</small>
                    <h2>
                        <a href={`https://discogs.com${data.uri}`} rel='noreferrer' target="_blank">
                            <img src={link} alt="more info" />
                        </a>
                        {data.title}
                    </h2>
                </div>
                <div className="Master__left--img">
                    <img src={data.cover_image} alt={data.title} />
                </div>
                <div className="Master__left--genre">
                    {data.genre.map((genre, idx) => {
                        return <p key={idx}>{genre}</p>
                    })}
                </div>
                <div className="Master__left--year">
                    <small>{data.year}</small>
                </div>
                <div className="Master__left--buttons">
                    <button type='button' onClick={handleCollection}>
                        <img src={hasInCollection.length > 0 ? folder : folderE} alt="add to collection" />
                    </button>
                    <button type='button' onClick={handleWishlist}>
                        <img src={hasInWishlist.length > 0 ? heart : heartE} alt="add to wishlist" />
                    </button>
                </div>
            </div>
            <div className="Master__right">
                <div className="Master__right--general">
                    <h3>
                        {data.style[0]}
                    </h3>
                    <h3>
                        {data.country}
                    </h3>
                </div>
                <div className="Master__right--format">
                    <h3>Formats available</h3>
                    {
                        data.format.map((format, idx) => {
                            return <p key={idx}>{format}</p>
                        })
                    }
                </div>
                <div className="Master__right--label">
                    <h3>Official labels</h3>
                    {
                        data.label.map((format, idx) => {
                            return <p key={idx}>{format}</p>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Master;