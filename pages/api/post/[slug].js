import { gql, GraphQLClient } from "graphql-request";
export default async function handler(req, res) {
  const slug = req.url.split("/").pop();
  const query = gql`
    query {
      posts(
        where: {
          slug_in: "${slug}"
        }
      ) {
        title
        id
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
  const posts = await client.request(query);
  
  res.status(200).json(posts);
}
