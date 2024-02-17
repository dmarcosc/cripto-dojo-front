import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import './ui/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Cripto Dojo',
    default: 'Cripto Dojo',
  },
  description: 'The best portfolio simulator in all web3',
  metadataBase: new URL('https://cripto-dojo-front.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
