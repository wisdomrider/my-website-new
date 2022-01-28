import { gql, GraphQLClient } from "graphql-request";
import TimeAgo from "timeago-react";
import Cheerio from "cheerio";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
export default function Home({ posts }) {
  const router = useRouter();
  return (
    <div>
      <h3>Recent Posts by Wisdomrider</h3>
      <hr />
      {posts.map((s) => (
        <motion.div
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            localStorage.setItem("post", JSON.stringify(s));
            router.push("/news/" + s.slug)
          }}
          whileHover={{ scale: 1.01 }}
          key={s.id}
          className="news"
        >
          <div className="flex flex-col" style={{ justifyContent: "center" }}>
            <h2 className="title font-bold mb-2">{s.title}</h2>
            <hr/>
            <div className="content">
              <ReactMarkdown
                children={s.content.markdown.split("\n")[0] + "..."}
              />
            </div>

            <div className="footers">
              <span className="date">
                <TimeAgo datetime={s.createdAt} />{" "}
              </span>
              <br />
              {s.tags.map((s, i) => (
                <span
                  onClick={(e) => (window.location = "/tag/" + s)}
                  className="badge badge-primary"
                  key={i}
                >
                  {s}
                </span>
              ))}
              {/* <span style={{marginLeft:10}} className='badge bg-success'><FaEye style={{ marginBottom: 0 }} />&nbsp;112</span> */}
            </div>
          </div>
          <img className="cover" src={s.coverPicture.url} alt="" />
        </motion.div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const googleApps = await (
    await fetch("https://play.google.com/store/apps/developer?id=Wisdomrider")
  ).text();
  const $ = Cheerio.load(googleApps);
  const apps = $(".ImZGtf");
  const appList = [];
  apps.each((_, el) => {
    const app = $(el);
    appList.push({
      appName: app.find(".WsMG1c").text(),
      appLink: "https://play.google.com" + app.find("a").attr("href"),
      appIcon: app.find("img").attr("data-src"),
    });
  });
  appList.sort(() => Math.random() - 0.5);

  const postsQuery = gql`
    {
      posts(orderBy: createdAt_DESC) {
        title
        id
        slug
        tags
        createdAt
        content {
          markdown
        }
        coverPicture {
          url
        }
      }
    }
  `;
  const client = new GraphQLClient(process.env.END_POINT, {
    headers: {
      Authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
  });
  const posts = await client.request(postsQuery);
  return { props: { appList, posts: posts.posts } };
}
