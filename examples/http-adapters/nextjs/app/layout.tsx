import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js + teams.ts',
  description: 'A Next.js app integrated with teams.ts SDK',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
