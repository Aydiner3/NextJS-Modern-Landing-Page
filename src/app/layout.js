import "./globals.css";

export const metadata = {
  title: "Özel Güvenlik Kurs Takibi Uygulaması",
  description:
    "Özel güvenlik şirketleri için tasarlanmış , özel güvenlik kursu öğrenci takip uygulaması.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="w-full h-screen">
      <body className="max-w-[1980px] mx-auto h-screen">
        {children}
      </body>
    </html>
  );
}
