import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`My name is Dennis (Yicheng) Wang. I am a 2nd year CS + Business student at Northeastern University. I like programming, playing tennis, and cooking.`}
      </p>
      <div className="my-8">
        <h2 className="mb-8 text-xl font-semibold tracking-tighter">
          Blog Posts
        </h2>
        <BlogPosts />
      </div>
    </section>
  );
}
