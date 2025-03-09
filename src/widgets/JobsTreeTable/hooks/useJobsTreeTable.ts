import { ENTITY_ID } from "@/env";
import { findParent } from "@/shared/utils";
import {
  GetTreeRowsUsingGetApiResponse,
  TreeResponse,
  useCreateRowInEntityUsingPostMutation,
  useDeleteRowUsingDeleteMutation,
  useGetTreeRowsUsingGetQuery,
  useUpdateRowUsingPostMutation,
} from "@/shared/store";
import { KeyboardEvent, useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const DEFAULT_ROW = {
  id: 0,
  child: [],
  equipmentCosts: 0,
  estimatedProfit: 0,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  overheads: 0,
  rowName: "",
  salary: 0,
  supportCosts: 0,
  total: 0,
};

const RowRequest = z.object({
  equipmentCosts: z.number().default(0),
  estimatedProfit: z.number().default(0),
  machineOperatorSalary: z.number().default(0),
  mainCosts: z.number().default(0),
  materials: z.number().default(0),
  mimExploitation: z.number().default(0),
  overheads: z.number().default(0),
  parentId: z.number().optional(),
  rowName: z.string(),
  salary: z.number().default(0),
  supportCosts: z.number().default(0),
  total: z.number().default(0),
});

export const useJobsTreeTable = () => {
  const { data, isLoading } = useGetTreeRowsUsingGetQuery({ eId: ENTITY_ID });
  const [createRow] = useCreateRowInEntityUsingPostMutation();
  const [updateRow] = useUpdateRowUsingPostMutation();
  const [deleteRow] = useDeleteRowUsingDeleteMutation();

  const [createRowParentId, setCreateRowParentId] = useState<
    number | undefined
  >();

  const [editedRowId, setEditedRowId] = useState<number | undefined>();

  const isDisabled = useMemo(() => {
    if (createRowParentId || editedRowId || !data || !data.length) return true;
    return false;
  }, [createRowParentId, data, editedRowId]);

  const rows = useMemo(() => {
    if (isLoading) return [];
    if (!data || !data.length) return [DEFAULT_ROW];

    const newData: GetTreeRowsUsingGetApiResponse = JSON.parse(
      JSON.stringify(data),
    );

    if (createRowParentId) {
      const parent = findParent(newData, createRowParentId);
      if (parent) {
        parent.child ??= [];
        parent.child.push(DEFAULT_ROW);
      }
    }

    return newData;
  }, [createRowParentId, data, isLoading]);

  const form = useForm<z.infer<typeof RowRequest>>({
    resolver: zodResolver(RowRequest),
    defaultValues: {
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      rowName: "",
      salary: 0,
      supportCosts: 0,
      total: 0,
    },
  });

  const onSubmit = useCallback(
    async (values: z.infer<typeof RowRequest>) => {
      if (createRowParentId || !data?.length)
        await createRow({
          eId: ENTITY_ID,
          outlayRowRequest: {
            ...values,
            parentId: createRowParentId,
          },
        });

      if (editedRowId) {
        await updateRow({
          eId: ENTITY_ID,
          rId: editedRowId,
          outlayRowUpdateRequest: values,
        });
      }

      setCreateRowParentId(undefined);
      setEditedRowId(undefined);
      form.reset();
    },
    [createRow, createRowParentId, data?.length, editedRowId, form, updateRow],
  );

  const onBlur = useCallback(() => {
    setCreateRowParentId(undefined);
    setEditedRowId(undefined);
    form.reset();
  }, [form]);

  const onPressEnter = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        onSubmit(form.getValues());
      }
    },
    [form, onSubmit],
  );

  const handleCreateEmptyRow = useCallback(
    (parentId: number) => {
      const { id: _, child: __, ...data } = DEFAULT_ROW;
      form.reset(data);
      setCreateRowParentId(parentId);
    },
    [form],
  );

  const handleEditedRow = useCallback(
    (rowId: number, rowData: TreeResponse) => {
      const { id: _, child: __, ...data } = rowData;
      form.reset(data);
      setEditedRowId(rowId);
    },
    [form],
  );

  const handleDeleteRow = useCallback(
    async (rid: number) => {
      await deleteRow({
        eId: ENTITY_ID,
        rId: rid,
      });
      setEditedRowId(undefined);
    },
    [deleteRow],
  );

  return {
    rows,
    isDisabled,
    handleCreateEmptyRow,
    form,
    onSubmit,
    createRowParentId,
    editedRowId,
    handleEditedRow,
    onBlur,
    onPressEnter,
    handleDeleteRow,
  };
};
