import { useSelector } from 'react-redux';
import useLogicMain from './useLogic';
import Filters from '../../components/Filters/Filters';
import { TStore } from '../../types';
import Loading from '../../components/Loading/Loading';
import ListItems from '../../components/ListItems/ListItems';
import './Main.scss';

function Main() {
  const { catalogues } = useSelector((state: TStore) => state.jobs);
  useLogicMain();

  return (
    <main className="jobs__main">
      {!catalogues.length && <Loading type={false} />}
      {!!catalogues.length && <Filters />}
      {!!catalogues.length && <ListItems />}
    </main>
  );
}

export default Main;
