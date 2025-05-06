import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import PortfolioItem from "./_components/portfolio-item";
import Link from "./_components/link";

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
        <div className="flex flex-row justify-end">
          <Link href={"/"} className="text-accent w-max">
            {">>Portfolio"}
          </Link>
        </div>
        <div>ブログ</div>
        <div>ブログ一覧へのリンク</div>
      </Container>
    </main>
  );
}
