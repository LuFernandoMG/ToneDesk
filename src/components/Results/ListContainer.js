import '../../assets/styles/components/ListContainer.scss';

const ListContainer = ({ children }) => {
    return (
        <div className="row centered">
            <div className="col-6">
                <table>
                    <thead>
                        <tr>
                            <th className='n'>
                                <h3>Nº</h3>
                            </th>
                            <th className='title'>
                                <h3>Title</h3>
                            </th>
                            <th className='save'>
                                <h3>Save</h3>
                            </th>
                            <th className='type'>
                                <h3>Type</h3>
                            </th>
                            <th className='year'>
                                <h3>Year</h3>
                            </th>
                        </tr>
                    </thead>

                    {children}

                </table>
            </div>
        </div>
    );
}

export default ListContainer;