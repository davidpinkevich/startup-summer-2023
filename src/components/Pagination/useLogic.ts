import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { savePaginationMain, savePaginationFavor } from '../../redux/slices/sliceJobs';
import { createArray } from '../../utils';

export function useLogicPagination(
  arrayPagMain: Array<number>,
  totalPages: number,
  currentVac: number,
  arrayPagFavor: Array<number>,
  currentFav: number,
  typePage: string
) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (typePage === 'main') {
      const newArray = createArray(arrayPagMain, currentVac, totalPages);
      dispatch(savePaginationMain(newArray));
    } else if (typePage === 'favor') {
      const newArray = createArray(arrayPagFavor, currentFav, totalPages);
      dispatch(savePaginationFavor(newArray));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVac, currentFav, totalPages, dispatch]);
}
