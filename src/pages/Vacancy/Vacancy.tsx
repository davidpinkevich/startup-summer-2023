import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, clearDescription } from '../../redux/slices/sliceJobs';
import { BASE_URL } from '../../constants';
import { TAppDispatch } from '../../redux/store/store';
import Item from '../../components/Item/Item';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { TStore } from '../../types';
import './Vacancy.scss';

function Vacancy() {
  const param = useParams();
  const { description, loadingData } = useSelector((state: TStore) => state.jobs);
  const dispatch = useDispatch<TAppDispatch>();
  const url = `${BASE_URL}vacancies/${param.id}`;
  useEffect(() => {
    dispatch(clearDescription());
    dispatch(getData(url));
  }, [dispatch, url]);

  return (
    <main className="vacancy">
      {loadingData === 'loading' && <Loading type={false} />}
      {loadingData === 'start' && description[0]?.error && <ErrorMessage />}
      {!!description.length && !description[0].error && <Item data={description[0]} />}
      {!!description.length && !description[0].error && (
        <div
          className="vacancy__description"
          dangerouslySetInnerHTML={{ __html: description[0].vacancyRichText }}
        />
      )}
    </main>
  );
}

export default Vacancy;
