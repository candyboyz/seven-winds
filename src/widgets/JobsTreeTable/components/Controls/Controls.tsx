import { TreeResponse } from "@/shared/store";
import { type Row } from "@tanstack/react-table";
import { EditIcon, TrashCanIcon } from "@/shared/icons";
import * as S from "./Controls.styled";

interface ControlsProps<T> {
  row: Row<T>;
  index: number;
  parentIndex?: number;
  isDisabled?: boolean;
  handleCreateEmptyRow: (parentId: number) => void;
  handleDeleteRow: (rid: number) => Promise<void>;
}

export function Controls({
  row,
  index,
  parentIndex,
  isDisabled,
  handleCreateEmptyRow,
  handleDeleteRow,
}: ControlsProps<TreeResponse>) {
  const rid = row.original.id;

  return (
    <S.Cell depth={row.depth} disabled={isDisabled}>
      <S.Node
        depth={row.depth}
        rowsToParent={parentIndex ? index + 1 - parentIndex : 0}
      />
      <S.Controls>
        <S.CreateButton
          disabled={isDisabled}
          onClick={() => {
            if (rid) handleCreateEmptyRow(rid);
          }}>
          <EditIcon />
        </S.CreateButton>

        <S.DeleteButton
          disabled={isDisabled}
          onClick={() => {
            if (rid) handleDeleteRow(rid);
          }}>
          <TrashCanIcon />
        </S.DeleteButton>
      </S.Controls>
    </S.Cell>
  );
}
