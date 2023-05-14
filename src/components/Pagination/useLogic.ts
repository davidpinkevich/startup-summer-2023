import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { savePaginationMain } from '../../redux/slice';
import { createArray } from '../../utils';

export function useLogicPagination(currentArray: Array<number>, pages: number, current: number) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (pages >= 3) {
      const newArray = createArray(currentArray, current, pages);
      dispatch(savePaginationMain(newArray));
    } else {
      const newArray = createArray(currentArray, current, pages);
      dispatch(savePaginationMain(newArray));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, pages, dispatch]);
}
