import "./globals.css";

export const metadata = {
  title: "Adela in ONEderland",
  description: "Interactive Invitation"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
