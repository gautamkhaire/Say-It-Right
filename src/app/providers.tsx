"use client";
import { SidebarProvider } from "../context/SidebarContext";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
