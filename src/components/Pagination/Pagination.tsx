import { useSelector, useDispatch } from 'react-redux';
import { changePagVacancies } from '../../redux/slices/sliceJobs';
import { useLogicPagination } from './useLogic';
import left from '../../assets/icons/arrow-left.svg';
import right from '../../assets/icons/arrow-right.svg';
import { TStore } from '../../types';
import './Pagination.scss';

type TPagination = {
  page: string;
  total: number;
};

function Pagination({ page, total }: TPagination) {
  const { currentPagVac, arrayPagMain, loadingData, arrayPagFavor, currentPagFavor } = useSelector(
    (state: TStore) => state.jobs
  );

  const dispatch = useDispatch();

  useLogicPagination(arrayPagMain, total, currentPagVac, arrayPagFavor, currentPagFavor, page);

  function changePage(type: string, id?: number) {
    if (type === 'INC' && page === 'main' && currentPagVac < total) {
      dispatch(changePagVacancies(currentPagVac + 1));
    } else if (type === 'DEC' && page === 'main' && currentPagVac > 1) {
      dispatch(changePagVacancies(currentPagVac - 1));
    } else if (type === 'CHANGE' && id && page === 'main') {
      dispatch(changePagVacancies(id));
    } else if (type === 'INC' && page === 'favor' && currentPagFavor < total) {
      dispatch(changePagVacancies(currentPagFavor + 1));
    } else if (type === 'DEC' && page === 'favor' && currentPagFavor > 1) {
      dispatch(changePagVacancies(currentPagFavor - 1));
    } else if (type === 'CHANGE' && id && page === 'favor') {
      dispatch(changePagVacancies(id));
    }
  }

  return (
    <div className="pagination">
      <button
        disabled={loadingData === 'loading' || currentPagVac === 1}
        onClick={() => changePage('DEC')}
        className="pagination__back"
      >
        <span className="pagination__img">
          <img src={left} alt="arrow-left" />
        </span>
      </button>
      {arrayPagMain.map((item, index) => (
        <button
          disabled={loadingData === 'loading'}
          className={currentPagVac === item ? 'pagination__change active' : 'pagination__change'}
          key={index}
          onClick={() => changePage('CHANGE', item)}
        >
          <span>{item}</span>
        </button>
      ))}
      <button
        disabled={loadingData === 'loading' || currentPagVac === total}
        onClick={() => changePage('INC')}
        className="pagination__next"
      >
        <span className="pagination__img">
          <img src={right} alt="arrow-right" />
        </span>
      </button>
    </div>
  );
}

export default Pagination;
