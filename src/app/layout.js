import "./globals.css";

export const metadata = {
  title: "Aparna Sarovar Towers in Nallagandla",
  description:
    "Nallagandla's Tallest Towers - Overlooking the Green HCU Campus. 3 & 4 BHK Apartments in Hyderabad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
