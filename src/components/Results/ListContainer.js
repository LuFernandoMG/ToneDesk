import '../../assets/styles/components/ListContainer.scss';
import ListElement from './ListElement';

const ListContainer = ({ results }) => {
    return (
        <div className="row centered">
            <div className="col-6">
                <table>
                    <thead>
                        <tr>
                            <th className='n'>
                                <h3>Country</h3>
                            </th>
                            <th className='title'>
                                <h3>Title</h3>
                            </th>
                            <th className='type'>
                                <h3>Type</h3>
                            </th>
                            <th className='year'>
                                <h3>Year</h3>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { results.results.map((result) => {
                            return <ListElement key={result.key} data={result} />
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default ListContainer;