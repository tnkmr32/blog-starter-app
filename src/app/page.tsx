import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import PortfolioItem from "./_components/portfolio-item";
import Link from "./_components/link";
import BlogItem from "./_components/blog-item";
import LinkBlue from "./_components/link-blue";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <div className="overflow-x-auto">
        <div className="flex gap-sm p-sm w-max">
          {/* TODO: 配列で受け取って一覧表示にする */}
          <PortfolioItem title={"AAAA"} src={""} />
          <PortfolioItem title={"BBB"} src={""} />
          <PortfolioItem title={"AAAA"} src={""} />
          <PortfolioItem title={"AAAA"} src={""} />
          <PortfolioItem title={"AAAA"} src={""} />
        </div>
      </div>
      <Container>
        <LinkBlue text={">>Portfolio"} href={"/"} />
        <div className="flex flex-col gap-sm items-center">
          <BlogItem
            imgSrc={""}
            title={
              "これは長い長いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
            }
            date={"2025/05/05"}
          />
          <BlogItem
            imgSrc={""}
            title={"タイトルタイトル"}
            date={"2025/05/05"}
          />
          <BlogItem
            imgSrc={""}
            title={"タイトルタイトル"}
            date={"2025/05/05"}
          />
          <BlogItem
            imgSrc={""}
            title={"タイトルタイトル"}
            date={"2025/05/05"}
          />
        </div>
        <div className="flex flex-row justify-end">
          <LinkBlue text={">>Blog"} href={"/"} />
        </div>
      </Container>
    </main>
  );
}
