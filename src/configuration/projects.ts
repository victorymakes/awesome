interface Project {
  title: string;
  description: string;
  href: string;
  imgSrc: string;
}

const projects: Project[] = [
  {
    title: 'Douban Book Plus',
    description: `一个免费的神奇电子书自由插件。自动帮你发现当前豆瓣读书详情页对应书籍的下载资源。`,
    imgSrc: `/static/images/douban-book-plus.png`,
    href: 'https://www.bookplus.site',
  },
  {
    title: '飞鸽导航',
    description: `一个资源超全的导航网站，生活、娱乐、办公统统不在话下。`,
    imgSrc: `/static/images/pigeons.png`,
    href: 'https://www.pigeons.website/',
  },
  {
    title: '外刊易',
    description: `外刊资源网, 超全外刊不限下载。`,
    imgSrc: `/static/images/magazine.png`,
    href: 'https://magazine.manybooks.top/',
  },
  {
    title: 'ZLibrary',
    description: `ZLibrary网址发布器。获取最新可用zlib网址，一个就够。`,
    imgSrc: `/static/images/zlib.png`,
    href: `/zlibrary`,
  },
  {
    title: "Anna's Archive",
    description: `安娜的档案(Anna's Archive)网址发布器。比 ZLibrary 还好用。`,
    imgSrc: `/static/images/anna.png`,
    href: `/anna`,
  },
  {
    title: 'Convertio',
    description: `超好用的在线文件转换网站，支持各种格式的电子书格式转换。`,
    imgSrc: `/static/images/convertio.jpg`,
    href: 'https://convertio.co/',
  },
];

export default projects;
