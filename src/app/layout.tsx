"use client";
import "./globals.css";

// components/DashboardLayout.tsx

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: DashboardLayoutProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>
          <div className="dashboard-layout flex">
            <Sidebar />
            <main className="dashboard-content">{children}</main>
          </div>
        </body>
      </html>
    </QueryClientProvider>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
