import { createContext } from "node:vm";
import { ReactNode } from "react";

const AdminProjectContext = createContext(undefined);

function AdminProjectProvider({ children }: { children: ReactNode }) {
  return (
    <AdminProjectContext.Provider>{children}</AdminProjectContext.Provider>
  );
}
