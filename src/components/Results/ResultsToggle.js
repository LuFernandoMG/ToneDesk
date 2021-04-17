import RoundedButton from "../Inputs/RoundedButton"
import '../../assets/styles/components/ResultsToggle.scss';
import grid from '../../assets/icons/grid.svg'
import list from '../../assets/icons/list.svg'

const ResultsToggle = ({ type, handler }) => {

    return (
        <div className="row centered">
            <div className="col-6">
                <div className="ResultsToggle">
                    <RoundedButton type={`grid ${type === 'grid' ? 'active' : ''}`} img={grid} handler={() => handler('grid')} />
                    <RoundedButton type={`list ${type === 'list' ? 'active' : ''}`} img={list} handler={() => handler('list')} />
                </div>
            </div>
        </div>
    )
}

export default ResultsToggle;
