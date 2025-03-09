import { RowResponse, TreeResponse } from "@/shared/store";
import { findParent } from "./findParent";

export const addRow = (
  draft: TreeResponse[],
  newRow: RowResponse,
  parentId?: number,
): void => {
  if (parentId) {
    const parent = findParent(draft, parentId);
    if (parent) {
      parent.child ??= [];
      parent.child.push(newRow);
    }
  } else {
    draft.push(newRow);
  }
};
