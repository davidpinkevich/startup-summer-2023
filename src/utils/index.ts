import { BASE_URL, PAGINATION_LENGTH, PAGINATION_COUNT } from '../constants';

export function createArray(arrayPagMain: Array<number>, current: number, pages: number) {
  const array = new Array(pages >= 3 ? PAGINATION_LENGTH : pages);
  if (!arrayPagMain.length || array.length !== arrayPagMain.length) {
    for (let i = 0; i < array.length; i += 1) {
      array[i] = i + 1;
    }
    return array;
  } else if (arrayPagMain.length && current <= pages && current >= 1) {
    if (arrayPagMain.filter((item) => item === current).length) {
      return arrayPagMain;
    } else if (arrayPagMain[arrayPagMain.length - 1] + 1 === current) {
      return arrayPagMain.map((item) => item + 1);
    } else if (arrayPagMain[0] - 1 === current) {
      return arrayPagMain.map((item) => item - 1);
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
