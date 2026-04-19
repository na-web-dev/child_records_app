// ダミーデータ

import type { Class, Child } from "../types";

export const classes: Class[] = [
  { id: 1, name: "うさぎ" },
  { id: 2, name: "ぺんぎん" },
];

export const children: Child[] = [
  { id: 1, name: "田中 太郎", classId: 1, sex: "男", bloodType: "A" },
  { id: 2, name: "佐藤 花子", classId: 1, sex: "女", bloodType: "B" },
  { id: 3, name: "鈴木 一郎", classId: 2, sex: "男", bloodType: "O" },
];
