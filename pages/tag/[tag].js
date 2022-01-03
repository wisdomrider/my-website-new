import { gql, GraphQLClient } from 'graphql-request'
import ReactMarkdown from 'react-markdown';
import TimeAgo from 'timeago-react';

export default function Tag({posts}) {
    return <div>
        {posts.map(s =>
            <div key={s.id} className='news'>
                <div>
                    <h2 className='title'>{s.title}</h2>
                    <div className='content'>
                        <ReactMarkdown children={s.content.markdown.split("\n")[0] + "..."} />
                    </div>

                    <div style={{ marginTop: -18 }} className='footers'>
                        <span className='date'><TimeAgo datetime={s.createdAt} /> </span>
                        <br />
                        {s.tags.map((s, i) => <span className="badge badge-primary" key={i}>{s}</span>)}
                        {/* <span style={{marginLeft:10}} className='badge bg-success'><FaEye style={{ marginBottom: 0 }} />&nbsp;112</span> */}

                    </div>
                </div>
                <img className='cover' src={s.coverPicture.url} alt="" />
            </div>
        )}
    </div>
}

export async function getServerSideProps(context) {


    const postsQuery = gql`
    {
     
       
        posts(where:{ tags_contains_some:"${context.query.tag}" }){
              title,id,tags,createdAt,
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
    return { props: { appList: null, posts: posts.posts } }
}
