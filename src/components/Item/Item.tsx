import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import marker from '../../assets/icons/marker.svg';
import starActive from '../../assets/icons/star-active.svg';
import starEmpty from '../../assets/icons/star-empty.svg';
import { TDataFindVacancies, TStore } from '../../types';
import { setFavorites } from '../../redux/slices/sliceJobs';
import './Item.scss';
import { NavLink } from 'react-router-dom';

type TItem = {
  data: TDataFindVacancies;
};

function Item({ data }: TItem) {
  const local = useLocation();
  const { vacancies } = useSelector((state: TStore) => state.jobs);
  const favorites: Array<TDataFindVacancies> = JSON.parse(localStorage.getItem('favorites') || '');
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favorites.filter((item) => item.id === data.id).length) setActive(true);
  }, [data.id, favorites]);

  const from = data.payment_from ? `от ${data.payment_from}` : '';
  const to = data.payment_to ? `до ${data.payment_to}` : '';
  const salary = `з/п ${from} ${to} ${data.currency || ''}`;

  function addLs(event: React.MouseEvent<HTMLButtonElement>, numb: number) {
    event.preventDefault();
    const ls: Array<TDataFindVacancies> = JSON.parse(localStorage.getItem('favorites') || '');
    const index = ls.findIndex((item) => item.id === numb);
    if (index === -1) {
      const check = vacancies.filter((item) => item.id === numb);
      localStorage.setItem('favorites', JSON.stringify([...ls, ...check]));
      if (local.pathname === '/favorites') {
        dispatch(setFavorites([...ls, ...check]));
      }
      setActive(true);
    } else if (index >= 0) {
      ls.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(ls));
      if (local.pathname === '/favorites') {
        dispatch(setFavorites(ls));
      }
      setActive(false);
    }
  }

  return (
    <NavLink to={`/vacancies/${data.id}`}>
      <div className="jobs__item">
        <button
          onClick={(event) => {
            addLs(event, data.id);
          }}
          className="jobs__item-button"
        >
          <img src={active ? starActive : starEmpty} />
        </button>
        <p className="jobs__item-profession">{data.profession}</p>
        <div className="jobs__item-employment employment">
          <p className="employment__salary">{salary}</p>
          <span>•</span>
          <p className="employment__type">{data.type_of_work.title}</p>
        </div>
        <div className="jobs__item-town">
          <span>
            <img src={marker} alt="marker" />
          </span>
          <p className="jobs__item-town-title">{data.town.title}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default Item;
