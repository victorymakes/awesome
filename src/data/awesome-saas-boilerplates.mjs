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

const getCategoryTagsMap = (items) => {
  const categoryTagsMap = new Map();
  for (let item of items) {
    const category = item.category;
    const tags = categoryTagsMap.get(category) || [];
    tags.push(...item.tags);
    categoryTagsMap.set(category, tags);
  }
  for (let key of categoryTagsMap.keys()) {
    categoryTagsMap.set(key, Array.from(new Set(categoryTagsMap.get(key))));
  }
  return categoryTagsMap;
};

// init awsome items and the category tags mapping data
getItems().then((items) => {
  console.log(JSON.stringify(items));
  const categoryTagsMap = getCategoryTagsMap(items);
  console.log('\n\n\n\n\n');
  console.log(JSON.stringify(Object.fromEntries(categoryTagsMap)));
});
