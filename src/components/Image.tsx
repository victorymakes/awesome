import siteMetadata from '@/configuration/site'
import NextImage, { ImageProps } from 'next/image'

const imageProxyList = [
  'https://i0.wp.com/',
  'https://i1.wp.com/',
  'https://i2.wp.com/',
  'https://i3.wp.com/',
]

const getRandomInt = (min: number, max: number) => {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

const remoteImage = (url: string) => {
  return url.startsWith('https://') || url.startsWith('http://')
}
const getWordpressImageSrc = (url: string) => {
  if (process.env.NODE_ENV === 'development' && !remoteImage(url)) {
    return url
  }

  if (process.env.NODE_ENV === 'development' && url.startsWith(siteMetadata.siteUrl)) {
    return url.replaceAll(siteMetadata.siteUrl, '')
  }

  if (!url.startsWith('https://') && !url.startsWith('http://')) {
    url = siteMetadata.siteUrl + url
  }

  return (
    imageProxyList[getRandomInt(0, 3)] + url.replaceAll('https://', '').replaceAll('http://', '')
  )
  //return url
}

const Image = ({ ...rest }: ImageProps) => {
  let src = rest.src
  if (typeof rest.src === 'string') {
    src = getWordpressImageSrc(src as string)
  }
  return (
    <NextImage
      {...rest}
      src={src}
      loading={'lazy'}
      // placeholder={'blur'}
      // blurDataURL={
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mN84zHTnoEIwDiqkL4KAeh+FIPycLbWAAAAAElFTkSuQmCC'
      // }
    />
  )
}

export default Image
