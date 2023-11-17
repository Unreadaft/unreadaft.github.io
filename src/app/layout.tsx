import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const title = 'Minecraftって本当にゲームだと思う？'
const description = '高校生が授業の一環でMinecraftを布教するサイト'
const url = 'https://unreadaft.github.io/'

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `${title} - %s`
  },
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description
  }
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}