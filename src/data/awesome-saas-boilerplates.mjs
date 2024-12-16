import * as cheerio from 'cheerio';

const getItems = async () => {
  const items = await (
    await fetch('https://xcomptek.com/awesome-saas-boilerplates/awesome-saas-boilerplates.json')
  ).json();
  return Object.entries(items).map((items) => {
    const item = items[1];
    return {
      title: item.title,
      summary: item.description,
      url: item.url,
      category: 'SaaS Boilerplate',
      tags: item.stack,
    };
  });
};

getItems().then((items) => {
  //console.log(items);
  console.log(JSON.stringify(items));
});
