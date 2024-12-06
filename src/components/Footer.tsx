import site from '@/configuration/site'
import SocialIcon from '@/components/icons'
import Link from '@/components/Link'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${site.email}`} size={6} />
          {/*<SocialIcon kind="github" href={metadata.github} size={6} />*/}
          {/*<SocialIcon kind="facebook" href={metadata.facebook} size={6} />*/}
          {/*<SocialIcon kind="youtube" href={metadata.youtube} size={6} />*/}
          {/*<SocialIcon kind="linkedin" href={metadata.linkedin} size={6} />*/}
          {/*<SocialIcon kind="twitter" href={metadata.twitter} size={6} />*/}
          {/*<SocialIcon kind="x" href={metadata.x} size={6} />*/}
          {/*<SocialIcon kind="instagram" href={metadata.instagram} size={6} />*/}
          {/*<SocialIcon kind="threads" href={metadata.threads} size={6} />*/}
          {/*<SocialIcon kind="xiaohongshu" href={metadata.xiaohongshu} size={6} />*/}
          {/*<SocialIcon kind="wechat" href={metadata.wechat} size={6} />*/}
          {/*<SocialIcon kind="home" href={metadata.home} size={6} />*/}
          {/*<SocialIcon kind="chrome" href={metadata.chrome} size={6} />*/}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{site.headerTitle}</Link>
        </div>
        <div className="mb-8 text-center text-sm text-gray-500 dark:text-gray-400">
          本站资源均来自公开互联网,如有侵权请联系站长删除: {site.email}
        </div>
      </div>
    </footer>
  )
}
