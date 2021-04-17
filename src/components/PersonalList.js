import '../assets/styles/components/PersonalList.scss';

const PersonalList = ({ img, title }) => {

    const handleSearch = () => {
        console.log('Hice click')
    }

    return (
        <div className="row centered">
            <div className="col-6 PersonalList">
                <div className="PersonalList__title">
                    <img src={img} alt={title} />
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    );
}

export default PersonalList;