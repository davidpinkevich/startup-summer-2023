import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUrl } from '../../utils';
import { TStore } from '../../types';
import { TAppDispatch } from '../../redux/store/store';
import { changeLoading, getData, clearResponse } from '../../redux/slices/sliceJobs';

function useLogicItems() {
  const { currentPagVac, search, categoryType, salaryFrom, salaryTo } = useSelector(
    (state: TStore) => state.jobs
  );
  const dispatch = useDispatch<TAppDispatch>();
  const url = createUrl(currentPagVac, search, categoryType, salaryFrom, salaryTo);

  useEffect(() => {
    dispatch(changeLoading());
    dispatch(clearResponse());
    dispatch(getData(url));
  }, [url, dispatch]);
}

export default useLogicItems;
