import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TDataFindVacancies, TStore } from '../../types/index';
import { setFavorites, changePagFavor } from '../../redux/slices/sliceJobs';
import { createResult, getTotalPages } from '../../utils';
import Pagination from '../../components/Pagination/Pagination';
import Empty from '../../components/Empty/Empty';
import Item from '../../components/Item/Item';
import './Favorites.scss';

function Favorites() {
  const { favorites, currentPagFavor } = useSelector((state: TStore) => state.jobs);
  const dispatch = useDispatch();
  changePagFavor(currentPagFavor - 1);

  useEffect(() => {
    dispatch(setFavorites(JSON.parse(localStorage.getItem('favorites') || '')));
  }, [dispatch]);

  const result: TDataFindVacancies[][] = createResult(favorites);

  const pages = getTotalPages(favorites.length);

  if (!result[currentPagFavor - 1] && result.length) {
    dispatch(changePagFavor(currentPagFavor - 1));
  }

  return (
    <div className="favorites">
      {!favorites.length && <Empty />}
      <div className="favorites__items">
        {!!favorites.length &&
          result[currentPagFavor - 1] &&
          result[currentPagFavor - 1].map((data) => {
            return <Item data={data} key={uuidv4()} />;
          })}
      </div>
      {pages > 1 && <Pagination page="favor" total={result.length} />}
    </div>
  );
}

export default Favorites;
