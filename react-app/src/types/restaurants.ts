import { UniqueName } from './common';

export type RestaurantCategoryType = 'CHINESE_FOOD' | 'JAPANESE_FOOD' | 'KOREAN_FOOD';

export type RestaurantMenu = {
  price: number;
} & UniqueName;

export type Restaurant = {
  category: RestaurantCategoryType;
  menu: RestaurantMenu[];
} & UniqueName;
