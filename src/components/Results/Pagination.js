import ReactPaginate from 'react-paginate';
import { getResults } from '../../backend/discogsMethods';
import '../../assets/styles/components/Pagination.scss';

const Pagination = ({ data, query, handler }) => {

    const totalPages = data.pages;

    const next = <span>{'>'}</span>
    const prev = <span>{'<'}</span>

    const handleChange = (data) => {
        const selectedPage = data.selected + 1
        getResults(query, selectedPage)
            .then((res) => {
                handler(res)
            })
    }

    return (
        <div className="container">
            <div className="row centered">
                <div className="col-2">
                    <div className="Pagination">
                        <ReactPaginate 
                            pageCount={totalPages} 
                            pageRangeDisplayed='5' 
                            onPageChange={handleChange} 
                            marginPagesDisplayed='3' 
                            nextLabel={next}
                            previousLabel={prev}
                            activeClassName='active'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagination;