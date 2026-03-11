import { AdminProductsProvider } from "../../components/admin/AdminProductsProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminProductsProvider>{children}</AdminProductsProvider>;
}
