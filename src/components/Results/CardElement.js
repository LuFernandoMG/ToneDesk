import album1 from '../../assets/img/album1.jpg';
import album2 from '../../assets/img/album2.png';
import album3 from '../../assets/img/album3.jpg';
import album4 from '../../assets/img/album4.jpg';
import folder from '../../assets/icons/folderEmpty.svg';
import heart from '../../assets/icons/heartEmpty.svg';
import '../../assets/styles/components/CardElement.scss'

const CardElement = () => {
    return (
        <>
            <div className="row centered">
                <div className="col-2">
                    <div className="card">
                        <div className="card__img">
                            <img src={album1} alt='info de la img' />
                        </div>
                        <div className="card__info">
                            <div className="card__info--left">
                                <h3>Title</h3>
                                <p>Year - Type</p>
                            </div>
                            <div className="card__info--right">
                                <button>
                                    <img src={folder} alt="" />
                                </button>
                                <button>
                                    <img src={heart} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card">
                        <div className="card__img">
                            <img src={album2} alt='info de la img' />
                        </div>
                        <div className="card__info">
                            <div className="card__info--left">
                                <h3>Title</h3>
                                <p>Year - Type</p>
                            </div>
                            <div className="card__info--right">
                                <button>
                                    <img src={folder} alt="" />
                                </button>
                                <button>
                                    <img src={heart} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card">
                        <div className="card__img">
                            <img src={album3} alt='info de la img' />
                        </div>
                        <div className="card__info">
                            <div className="card__info--left">
                                <h3>Title</h3>
                                <p>Year - Type</p>
                            </div>
                            <div className="card__info--right">
                                <button>
                                    <img src={folder} alt="" />
                                </button>
                                <button>
                                    <img src={heart} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row centered">
                <div className="col-2">
                    <div className="card">
                        <div className="card__img">
                            <img src={album4} alt='info de la img' />
                        </div>
                        <div className="card__info">
                            <div className="card__info--left">
                                <h3>Title</h3>
                                <p>Year - Type</p>
                            </div>
                            <div className="card__info--right">
                                <button>
                                    <img src={folder} alt="" />
                                </button>
                                <button>
                                    <img src={heart} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card">
                        <div className="card__img">
                            <img src={album1} alt='info de la img' />
                        </div>
                        <div className="card__info">
                            <div className="card__info--left">
                                <h3>Title</h3>
                                <p>Year - Type</p>
                            </div>
                            <div className="card__info--right">
                                <button>
                                    <img src={folder} alt="" />
                                </button>
                                <button>
                                    <img src={heart} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card">
                        <div className="card__img">
                            <img src={album2} alt='info de la img' />
                        </div>
                        <div className="card__info">
                            <div className="card__info--left">
                                <h3>Title</h3>
                                <p>Year - Type</p>
                            </div>
                            <div className="card__info--right">
                                <button>
                                    <img src={folder} alt="" />
                                </button>
                                <button>
                                    <img src={heart} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row centered">
                <div className="col-2">
                    <div className="card">
                        <div className="card__img">
                            <img src={album3} alt='info de la img' />
                        </div>
                        <div className="card__info">
                            <div className="card__info--left">
                                <h3>Title</h3>
                                <p>Year - Type</p>
                            </div>
                            <div className="card__info--right">
                                <button>
                                    <img src={folder} alt="" />
                                </button>
                                <button>
                                    <img src={heart} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card">
                        <div className="card__img">
                            <img src={album4} alt='info de la img' />
                        </div>
                        <div className="card__info">
                            <div className="card__info--left">
                                <h3>Title</h3>
                                <p>Year - Type</p>
                            </div>
                            <div className="card__info--right">
                                <button>
                                    <img src={folder} alt="" />
                                </button>
                                <button>
                                    <img src={heart} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card">
                        <div className="card__img">
                            <img src={album1} alt='info de la img' />
                        </div>
                        <div className="card__info">
                            <div className="card__info--left">
                                <h3>Title</h3>
                                <p>Year - Type</p>
                            </div>
                            <div className="card__info--right">
                                <button>
                                    <img src={folder} alt="" />
                                </button>
                                <button>
                                    <img src={heart} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardElement;
