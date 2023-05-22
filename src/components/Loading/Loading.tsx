import './Loading.scss';

type TLoading = {
  type: boolean;
};

function Loading(props: TLoading) {
  return (
    <div className="loading">
      {props.type && 'Ищем вакансии'} <span className="loading-first"></span>
      <span className="loading-second"></span>
      <span className="loading-third"></span>
    </div>
  );
}

export default Loading;
