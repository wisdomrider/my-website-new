import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import TimeAgo from "timeago-react";
import { useRouter } from "next/router";
import { MdArrowBack } from "react-icons/md";
import { Image } from "@chakra-ui/react";
export default function Post() {
  const [post, setPost] = useState(null);
  const { back } = useRouter();
  useEffect(() => {
    const post = JSON.parse(localStorage.getItem("post"));
    if (post) {
      setPost(post);
    } else {
      fetch("/api/post/" + window.location.pathname.split("/").pop())
        .then((res) => res.json())
        .then((res) => {
          setPost(res);
          localStorage.setItem("post", JSON.stringify(res));
        })
        .catch((err) => {
          alert("Something went wrong. Please try again later.");
        });
    }
  }, []);

  return (
    <div>
      {post ? (
        <div className="pl-3">
          <div
            style={{
              background: "#efefef",
              width: "fit-content",
              borderRadius: "50%",
            }}
          >
            <MdArrowBack onClick={() => back()} size={30} />
          </div>
          <h1 className="text-4xl font-bold mb-1">{post.title}</h1>
          <TimeAgo datetime={post.createdAt} />
          <Image
            mb={5}
            mt={4}
            className="float-right mr-6"
            style={{
              maxHeight: "200px",
            }}
            src={post.coverPicture.url}
            alt={post.title}
          />
          <div className="content mt-2">
            <ReactMarkdown children={post.content.markdown} />
          </div>
          <div className="tags mt-4">
            {post.tags.map((tag, i) => (
              <span key={i} className="badge badge-primary ml-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div>Fetching post....</div>
      )}
    </div>
  );
}
