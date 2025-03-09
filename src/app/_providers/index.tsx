import { QueryProvider } from "./QueryProvider";

export function Providers({ children }: React.PropsWithChildren) {
  return <QueryProvider>{children}</QueryProvider>;
}
