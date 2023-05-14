import { PAGINATION_LENGTH } from '../constants';

export function createArray(arrayPagMain: Array<number>, current: number, pages: number) {
  const array = new Array(PAGINATION_LENGTH);
  if (!arrayPagMain.length) {
    for (let i = 0; i < PAGINATION_LENGTH; i += 1) {
      array[i] = i + 1;
    }
    return array;
  } else if (arrayPagMain && current <= pages && current >= 1) {
    if (arrayPagMain.filter((item) => item === current).length) {
      return arrayPagMain;
    } else if (arrayPagMain[arrayPagMain.length - 1] + 1 === current) {
      return arrayPagMain.map((item) => item + 1);
    } else if (arrayPagMain[0] - 1 === current) {
      return arrayPagMain.map((item) => item - 1);
    }
  }
}
