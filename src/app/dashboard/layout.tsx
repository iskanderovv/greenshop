import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Green Shop Dashboard",
    template: "%s | Green Shop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="container grid place-items-center h-screen text-4xl">{children}</main>;
}
