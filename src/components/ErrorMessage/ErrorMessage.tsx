import { useSelector } from 'react-redux';
import error from '../../assets/icons/error.svg';
import { TStore } from '../../types';
import './ErrorMessage.scss';

function ErrorMessage() {
  const { description } = useSelector((state: TStore) => state.jobs);
  return (
    <div className="jobs__error">
      <div className="jobs__error-img">
        <img src={error} />
        <p className="jobs__error-message">
          {description[0].error?.message ? description[0].error?.message : 'Что-то пошло не так'}
        </p>
      </div>
    </div>
  );
}

export default ErrorMessage;
