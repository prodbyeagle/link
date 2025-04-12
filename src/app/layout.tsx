import type React from 'react';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'EagleLink | Share Your World',
	description: 'All your important links in one beautiful, customizable page',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={geist.className}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
