import { BASE_URL, PAGINATION_LENGTH, PAGINATION_COUNT } from '../constants';
import { TDataFindVacancies } from '../types';

export function createArray(arrayCurrent: Array<number>, current: number, pages: number) {
  const array = new Array(pages >= 3 ? PAGINATION_LENGTH : pages);
  if (!arrayCurrent.length || array.length !== arrayCurrent.length) {
    for (let i = 0; i < array.length; i += 1) {
      array[i] = i + 1;
    }
    return array;
  } else if (arrayCurrent.length && current <= pages && current >= 1) {
    if (arrayCurrent.filter((item) => item === current).length) {
      return arrayCurrent;
    } else if (arrayCurrent[arrayCurrent.length - 1] + 1 === current) {
      return arrayCurrent.map((item) => item + 1);
    } else if (arrayCurrent[0] - 1 === current) {
      return arrayCurrent.map((item) => item - 1);
    } else {
      for (let i = 0; i < array.length; i += 1) {
        array[i] = i + 1;
      }
      return array;
    }
  }
}
export function createUrl(
  page: number,
  search: string,
  category: string,
  from: string,
  to: string
) {
  const base = `${BASE_URL}vacancies/?published=1&page=${page - 1}&count=${PAGINATION_COUNT}`;
  const arr = [
    base,
    search ? `keyword=${search}` : '',
    category ? `catalogues=${category}` : '',
    from ? `payment_from=${from}` : '',
    to ? `payment_to=${to}` : '',
  ];
  if (from || to) arr.push('no_agreement=1');
  return arr.filter((item) => item).join('&');
}

export function createResult(favorites: Array<TDataFindVacancies>) {
  const newArr = [...favorites];
  const result: TDataFindVacancies[][] = [];

  for (let i = 0; i < newArr.length; i += PAGINATION_COUNT) {
    const blockFavorites = newArr.slice(i, i + PAGINATION_COUNT);
    result.push(blockFavorites);
  }

  return result;
}

export function getTotalPages(number: number) {
  return number < 500 ? Math.ceil(number / PAGINATION_COUNT) : Math.ceil(500 / PAGINATION_COUNT);
}
