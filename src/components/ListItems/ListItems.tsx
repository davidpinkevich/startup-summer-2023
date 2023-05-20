import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TStore } from '../../types';
import { getTotalPages } from '../../utils';
import useLogicItems from './useLogicItems';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import Item from '../Item/Item';
import Search from '../Search/Search';
import './ListItems.scss';

function ListItems() {
  useLogicItems();
  const { loadingData, totalVacancies, vacancies } = useSelector((state: TStore) => state.jobs);

  const pages = getTotalPages(totalVacancies);
  return (
    <section className="jobs">
      {loadingData === 'loading' && <Loading type />}
      {loadingData === 'start' && (
        <div className="jobs__items">
          <Search />
          {!!vacancies.length &&
            vacancies.map((data) => {
              return <Item data={data} key={uuidv4()} />;
            })}
        </div>
      )}
      {pages > 1 && <Pagination page="main" total={pages} />}
    </section>
  );
}

export default ListItems;