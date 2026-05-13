import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 минут
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

type Props = {
  children: ReactNode;
};

export const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};