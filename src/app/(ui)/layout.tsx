import Sidebar from "@/widgets/navigation/Sidebar";
import ThemeProvider from "../providers/ThemeProvider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-1 p-4">{children}</div>
      </div>
    </ThemeProvider>
  );
}
