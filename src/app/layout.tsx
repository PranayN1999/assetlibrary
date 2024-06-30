import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './../../styles/aL_global_styles.scss'

export const metadata = {
  title: 'assetLibrary',
  description: 'join the game dev community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{"margin": "0"}}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
