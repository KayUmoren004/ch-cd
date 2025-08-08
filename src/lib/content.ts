import boards from '../data/categories.seed.json';
import { CategoryBoard, ContentMode } from './models';

export function loadBoards(mode?: ContentMode): CategoryBoard[] {
  const list = boards as CategoryBoard[];
  return mode ? list.filter((b) => b.mode === mode) : list;
}

export function getRandomBoard(mode: ContentMode): CategoryBoard {
  const list = loadBoards(mode);
  return list[Math.floor(Math.random() * list.length)];
}
