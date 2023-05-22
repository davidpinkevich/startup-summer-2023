import { useEffect } from 'react';
import { AUTH_DATA, BASE_URL } from '../../constants';
import { TDataRespCatalog, TStore, TDataRespAuth } from '../../types';
import { getCatalogues } from '../../redux/slices/sliceJobs';
import { useDispatch, useSelector } from 'react-redux';

function useLogicMain() {
  const dispatch = useDispatch();
  const { catalogues } = useSelector((state: TStore) => state.jobs);
  const tokenLS = localStorage.getItem('token');
  const ttl = localStorage.getItem('ttl');
  useEffect(() => {
    (async () => {
      if (!tokenLS || (new Date().getTime() / 1000 - Number(ttl)) / 86400 > 6.9) {
        const response = await fetch(
          `${BASE_URL}oauth2/password/?login=${AUTH_DATA.LOGIN}&password=${AUTH_DATA.PASSWORD}&client_id=${AUTH_DATA.CLIENT_ID}&client_secret=${AUTH_DATA.CLIENT_SECRET}`,
          {
            headers: {
              'x-secret-key': AUTH_DATA.X_SECRET_KEY,
            },
          }
        );
        const data: TDataRespAuth = await response.json();
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('ttl', JSON.stringify(data.ttl));
      }
      if (!catalogues.length) {
        const tokenLS = localStorage.getItem('token');
        const responseCatalogues = await fetch(`${BASE_URL}catalogues/`, {
          headers: {
            Authorization: `Bearer ${tokenLS}`,
            'x-secret-key': AUTH_DATA.X_SECRET_KEY,
            'X-Api-App-Id': AUTH_DATA.CLIENT_SECRET,
          },
        });
        const cataloguesData = await responseCatalogues.json();
        dispatch(
          getCatalogues(
            cataloguesData.map((item: TDataRespCatalog) => {
              return {
                key: item.key,
                title: item.title_rus,
              };
            })
          )
        );
      }
    })();
  }, [catalogues.length, dispatch, tokenLS, ttl]);
}

export default useLogicMain;
