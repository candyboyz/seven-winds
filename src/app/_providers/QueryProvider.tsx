import { store } from "@/shared/store";
import { Provider } from "react-redux";

export function QueryProvider({ children }: React.PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
