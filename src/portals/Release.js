import { useDispatch, useSelector } from 'react-redux';
import { addToCollection, addToWishlist, updateUser, removeFromWishlist, removeFromCollection } from '../backend/firebaseMethods';
import { setActiveUser } from '../backend/userSlice';
import folderE from '../assets/icons/folderEmpty.svg'
import folder from '../assets/icons/folder.svg'
import heartE from '../assets/icons/heartEmpty.svg'
import heart from '../assets/icons/heart.svg'
import link from '../assets/icons/link.svg'

const Release = ({ data }) => {

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
        <div className="Release">
            <div className="Release__left">
                <div className="Release__left--title">
                    <small>Release</small>
                    <h2>
                        {data.title}
                    </h2>
                </div>
                <div className="Release__left--img">
                    <img src={data.cover_image} alt={data.title} />
                </div>
                <div className="Release__left--genre">
                    {data.genre.map((genre, idx) => {
                        return <p key={idx}>{genre}</p>
                    })}
                </div>
                <div className="Release__left--year">
                    <small>{data.year}</small>
                </div>
                <div className="Release__left--buttons">
                    <button type='button' onClick={handleCollection}>
                        <img src={hasInCollection.length > 0 ? folder : folderE} alt="add to collection" />
                    </button>
                    <button type='button' onClick={handleWishlist}>
                        <img src={hasInWishlist.length > 0 ? heart : heartE} alt="add to wishlist" />
                    </button>
                </div>
            </div>
            <div className="Release__right">
                <div className="Release__right--general">
                    <h3>
                        {data.country}
                    </h3>
                    <h3>
                        <a href={`https://discogs.com${data.uri}`} rel='noreferrer' target="_blank">
                            <img src={link} alt="more info" />
                            Visit the web
                        </a>
                    </h3>
                </div>
                <div className="Release__right--format">
                    <h3>Formats available</h3>
                    {
                        data.format.map((format, idx) => {
                            return <p key={idx}>{format}</p>
                        })
                    }
                </div>
                <div className="Release__right--label">
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

export default Release;