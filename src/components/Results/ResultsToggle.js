import RoundedButton from "../Inputs/RoundedButton"
import '../../assets/styles/components/ResultsToggle.scss';
import grid from '../../assets/icons/grid.svg'
import list from '../../assets/icons/list.svg'

const ResultsToggle = () => {

    const handleGrid = () => {
        console.log('Mostrar en forma de grid')
    }

    const handleList = () => {
        console.log('Mostrar en forma de list')
    }

    return (
        <div className="row centered">
            <div className="col-6">
                <div className="ResultsToggle">
                    <RoundedButton type='grid active' img={grid} handler={handleGrid} />
                    <RoundedButton type='list' img={list} handler={handleList} />
                </div>
            </div>
        </div>
    )
}

export default ResultsToggle;
