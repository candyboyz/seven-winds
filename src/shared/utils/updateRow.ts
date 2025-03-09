import { type RowResponse, type TreeResponse } from "@/shared/store";

export const updateRow = (
  rows: TreeResponse[],
  id: number,
  newData: RowResponse,
): boolean => {
  return rows.some((row) => {
    if (row.id === id) {
      Object.assign(row, newData);
      return true;
    }
    return row.child ? updateRow(row.child, id, newData) : false;
  });
};
