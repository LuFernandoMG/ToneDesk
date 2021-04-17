import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getResultsInfo } from '../../backend/statusSlice';
import '../../assets/styles/components/Pagination.scss';

const Pagination = ({ query }) => {

    const status = useSelector(state => state.status)

    const dispatch = useDispatch();
    const totalPages = status.results.pagination.pages;
    const next = <span>{'>'}</span>
    const prev = <span>{'<'}</span>

    const handleChange = (e) => {
        const selectedPage = e.selected + 1
        dispatch(getResultsInfo([query, selectedPage]))
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
                            forcePage={status.results.pagination.page - 1}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagination;