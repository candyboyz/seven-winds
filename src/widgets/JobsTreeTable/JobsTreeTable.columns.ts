import { TreeResponse } from "@/shared/store";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TreeResponse>[] = [
  {
    accessorKey: "id",
    header: "Уровень",
  },
  { accessorKey: "rowName", header: "Наименование работ" },
  { accessorKey: "salary", header: "Основная з/п" },
  { accessorKey: "equipmentCosts", header: "Оборудование" },
  { accessorKey: "overheads", header: "Накладные расходы" },
  { accessorKey: "estimatedProfit", header: "Сметная прибыль" },
];
