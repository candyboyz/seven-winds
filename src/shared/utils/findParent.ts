import { TreeResponse } from "@/shared/store";

export const findParent = (
  rows: TreeResponse[],
  parentId: number,
): TreeResponse | undefined => {
  for (const row of rows) {
    if (row.id === parentId) return row;
    if (row.child) {
      const found = findParent(row.child, parentId);
      if (found) return found;
    }
  }
};
