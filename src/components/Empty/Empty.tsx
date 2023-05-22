import { NavLink, useLocation } from 'react-router-dom';
import image from '../../assets/icons/empty.svg';
import './Empty.scss';

function Empty() {
  const location = useLocation();
  return (
    <div className="jobs__empty">
      <div className="jobs__empty-image">
        <img src={image} alt={'no results'} />
      </div>
      <h2 className="jobs__empty-title">
        {location.pathname === '/'
          ? 'По данному запросу нет подходящих вакансий'
          : 'Упс, здесь еще ничего нет!'}
      </h2>
      {location.pathname !== '/' && (
        <NavLink to="/" className="jobs__empty-button">
          <button>Поиск вакансий</button>
        </NavLink>
      )}
    </div>
  );
}

export default Empty;
