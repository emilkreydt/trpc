import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/utils/providers/TrpcProviders";
import { MainLayout } from "@/app/main-layout";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/utils/providers/ThemeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TRPC Nextjs 15",
  description: "Nice App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${poppins.variable} `}>
        <TRPCProvider>
            <ThemeProvider
              disableTransitionOnChange={true}
              defaultTheme="system"
            >
              <MainLayout>{children}</MainLayout>
            </ThemeProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
