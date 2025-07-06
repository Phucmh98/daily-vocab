export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="w-full max-w-4xl p-4">{children}</main>
    </div>
  );
}