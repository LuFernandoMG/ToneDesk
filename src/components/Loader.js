import '../assets/styles/components/Loader.scss';

const Loader = () => {
    return (
        <div className="Modal">
            <div className="Loader">
                <div class="spinner">
                    <div class="r1"></div>
                    <div class="r2"></div>
                    <div class="r3"></div>
                    <div class="r4"></div>
                    <div class="r5"></div>
                </div>
            </div>
        </div>
    );
}

export default Loader;