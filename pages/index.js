import { gql, GraphQLClient } from 'graphql-request'
import Skeleton from 'react-loading-skeleton'
import Cheerio from 'cheerio';
export default function Home({ posts }) {
  return (
    <div>
      <h3>Recent Posts by Wisdomrider</h3>
      <hr />
      {posts.map(s =>
        <div key={s.id} className='news'>
          <div>
            <h2 className='title'>{s.title}</h2>
            <div className='content'>{s.content.markdown.split(" ").slice(0, 40).join(" ")}...</div>

            <div className='footers'>
            <span className='date'>21 sep 2021</span>
          </div>
          </div>
          <img className='cover' src={s.coverPicture.url} alt="" />
        </div>
      )}
    </div>
  )
}

export async function getStaticProps(context) {
  const googleApps = await (await fetch('https://play.google.com/store/apps/developer?id=Wisdomrider')).text();
  const $ = Cheerio.load(googleApps);
  const apps = $('.ImZGtf');
  const appList = [];
  apps.each((_, el) => {
    const app = $(el);
    appList.push({
      appName: app.find('.WsMG1c').text(),
      appLink: 'https://play.google.com' + app.find('a').attr('href'),
      appIcon: app.find('img').attr('data-src')

    });
  });
  appList.sort(() => Math.random() - 0.5);

  const postsQuery = gql`
  {
   
      posts{
        title,id,tags
      content{
        markdown
      },coverPicture {
        url
      }
    }
    
  }
`
  const client = new GraphQLClient(process.env.END_POINT, {
    headers: {
      'Authorization': `Bearer ${process.env.CMS_TOKEN}`
    }
  })
  const posts = await client.request(postsQuery)
  return { props: { appList, posts: posts.posts } }
}