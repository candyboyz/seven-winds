import { type TreeResponse } from "@/shared/store";

export const removeRow = (rows: TreeResponse[], id: number): boolean => {
  const index = rows.findIndex((row) => row.id === id);
  if (index !== -1) {
    rows.splice(index, 1);
    return true;
  }
  return rows.some((row) => (row.child ? removeRow(row.child, id) : false));
};
