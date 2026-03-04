import { StoreHeader } from "@/components/store/store-header";
import { BottomNav } from "@/components/store/bottom-nav";
import { StoreSplash } from "@/components/store/store-splash";

export const metadata = {
  title: "Tienda",
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoreSplash />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <StoreHeader />
        <main className="flex-1 pb-20">{children}</main>
        <BottomNav />
      </div>
    </>
  );
}
