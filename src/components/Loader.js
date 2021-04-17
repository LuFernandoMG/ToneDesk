import '../assets/styles/components/Loader.scss';

const Loader = () => {
    return (
        <div className="Modal">
            <div className="Loader">
                <div className="spinner">
                    <div className="r1"></div>
                    <div className="r2"></div>
                    <div className="r3"></div>
                    <div className="r4"></div>
                    <div className="r5"></div>
                </div>
            </div>
        </div>
    );
}

export default Loader;