const { readdir, readFile, writeFile } = require("fs/promises");
const matter = require("gray-matter");

async function getPosts(postDir) {
  const files = await readdir(postDir);
  return files.reduce(async (postArray, file) => {
    const content = await readFile(`${postDir}/${file}`, "utf8");
    const parsed = matter(content);

    if (!parsed.data.discussion_url && parsed.data.published) {
      postArray.push(parsed);
      return postArray;
    }

    return postArray;
  }, []);
}

getPosts("./posts")
  .then((posts) => console.log(posts))
  .catch(console.err);
