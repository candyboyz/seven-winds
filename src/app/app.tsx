import { ClientLayout } from "@/app/layout";
import { JobsTreeTable } from "@/widgets";
import { Providers } from "./_providers";

export function App() {
  return (
    <Providers>
      <ClientLayout>
        <JobsTreeTable />
      </ClientLayout>
    </Providers>
  );
}
