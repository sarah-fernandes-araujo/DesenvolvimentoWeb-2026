import { Produto } from './produto';

export class ItemCesta {
  produto: Produto = new Produto();
  quantidade: number = 0;
  valorItem: number = 0;
}