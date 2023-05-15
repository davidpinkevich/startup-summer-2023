import { useSelector } from 'react-redux';
import { TStore } from '../../types';
import marker from '../../assets/icons/marker.svg';
import './Item.scss';

type TItem = {
  id: number;
};

function Item({ id }: TItem) {
  console.log('id: ', id);
  const { vacancies } = useSelector((state: TStore) => state.jobs);
  const from = vacancies[id].payment_from ? `от ${vacancies[id].payment_from}` : '';
  const to = vacancies[id].payment_to ? `до ${vacancies[id].payment_to}` : '';
  const salary = `з/п ${from} ${to} ${vacancies[id].currency || ''}`;
  // console.log('vacancies: ', vacancies);
  return (
    <div className="jobs__item">
      <p className="jobs__item-profession">{vacancies[id].profession}</p>
      <div className="jobs__item-employment employment">
        <p className="employment__salary">{salary}</p>
        <span>•</span>
        <p className="employment__type">{vacancies[id].type_of_work.title}</p>
      </div>

      <div className="jobs__item-town">
        <span>
          <img src={marker} alt="marker" />
        </span>
        <p className="jobs__item-town-title">{vacancies[id].town.title}</p>
      </div>
    </div>
  );
}

export default Item;
