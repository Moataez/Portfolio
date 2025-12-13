import './globals.css'
import Header from "../components/Header";

export const metadata = {
  title: "Moatez's Portfolio",
  description: 'Data Scientist | Full-Stack Developer | ML & Voice Systems',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                // Default to dark mode if no preference is stored
                if (stored === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
