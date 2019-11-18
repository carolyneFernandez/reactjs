import posts from './data/posts.json';
import bestPosts from './data/best-posts.json';
import GlobalState from './../global-state';


export function login(email, password) {
  if (email !== '' && password !== '') {


    window.fetch('https://randomuser.me/api/',{
      method:'GET'
    }).then((response=>{
       return response.json();
    })).then((json=>{
      const first = json.results[0].name.first;
      const last = json.results[0].name.last;
      GlobalState.setUser({
        firstname: first,
        lastname: last
      });
    }))

    
  }
}
export function getPosts() {
  const formatPromises = posts.map(post => formatPost(post));

  return Promise.all(formatPromises);
}

export async function getPost(id) {
  const res = posts.filter(post => post.id === id);

  if (res.length === 0) {
    return null;
  }

  const post = await formatPost(res[0]);

  return post;
}

export async function getBestPosts() {
  const formatPromises = bestPosts.map(postId => getPost(postId));

  return Promise.all(formatPromises);
}

function getComments(ids) {
  const promises = ids.map(id => getPost(id));

  return Promise.all(promises);
}

async function formatPost(post) {
  const {id, by, title, url, text, time, kids} = post;
  const comments = await getComments(kids);

  return {
    id: id,
    author: by,
    title,
    contentUrl: url,
    contentText: text,
    date: new Date(time).toLocaleDateString('fr'),
    comments
  }
}
