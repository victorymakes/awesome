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

const getCategories = async () => {
  const items = await (
    await fetch(
      'https://oonmigntisjxczfaulla.supabase.co/storage/v1/object/public/awsome-items/awesome-items.json',
    )
  ).json();
  const categories = new Set();
  for (let item of items) {
    categories.add(item.category);
  }
  return Array.from(categories);
};

const getTags = async () => {
  const items = await (
    await fetch(
      'https://oonmigntisjxczfaulla.supabase.co/storage/v1/object/public/awsome-items/awesome-items.json',
    )
  ).json();
  const tags = new Set();
  for (let item of items) {
    for (let tag of item.tags) {
      tags.add(tag);
    }
  }
  return Array.from(tags);
};

// getTags().then((tags) => {
//   console.log(JSON.stringify(tags));
// });

// getItems().then((items) => {
//   //console.log(items);
//   console.log(JSON.stringify(items));
// });

getCategories().then((categories) => {
  console.log(JSON.stringify(categories));
});
