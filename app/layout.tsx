import Provider from '@/components/provider'
import { siteConfig } from '@/config/site'
import '@/styles/globals.css'
import '@opub-cdl/ui/dist/assets/styles-bundled.css' // there is bug with nextjs app dir, hotfix for now
import '@opub-cdl/ui/dist/assets/styles.css'
import { Inter as FontSans } from 'next/font/google'

const fontSans = FontSans({ subsets: ['latin'] })

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		'Next.js',
		'React',
		'Server Components',
		'Radix UI',
		'OPub',
		'Open Publishing',
	],
	authors: [
		{
			name: 'CivicDataLab',
			url: 'https://civicdatalab.in/',
		},
	],
	creator: 'CivicDataLab',
}
// TODO - Add favicon and other social meta tags

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={fontSans.className}>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
