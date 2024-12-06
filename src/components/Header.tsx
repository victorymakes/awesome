import site from '@/configuration/site'
import links from '@/configuration/nav'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from '@/components/Image'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={site.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image src={`${site.logo}`} width={80} height={30.8} alt={'book plus blog logo'} />
            </div>
            {typeof site.headerTitle === 'string' ? (
              <div
                className="hidden h-6 items-center text-2xl font-semibold sm:block"
                style={{ height: '30.8px', lineHeight: '30.8px' }}
              >
                {site.headerTitle}
              </div>
            ) : (
              site.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {links
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
