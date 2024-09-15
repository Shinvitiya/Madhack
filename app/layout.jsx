import "../styles/globals.css"

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL),
  title: { 
    default: "MadHack 3.0",
  },
  description: "",
  openGraph: {
    title: "MadHack 3.0",
    images: "/opengraph.png",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-primary">{children}</body>
    </html>
  );
}
