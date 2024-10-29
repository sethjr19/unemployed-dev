import localFont from "next/font/local";
import './globals.css';
import { AuthProvider } from "./context/AuthContext";

const pretendard = localFont({
  src: "../app/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="kr" className={`${pretendard.variable}`}>
    <body className={pretendard.className}>
    <AuthProvider>
    {children}
    </AuthProvider>
    </body>
    </html>
  );
}