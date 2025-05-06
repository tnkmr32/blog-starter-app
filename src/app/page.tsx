import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import PortfolioItem from "./_components/portfolio-item";
import Link from "./_components/link";
import BlogItem from "./_components/blog-item";

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
          <Link href={"/"} className="text-accent w-max">
            {">>Blog"}
          </Link>
        </div>
        {/* "title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title" */}
        <div>ブログ一覧へのリンク</div>
      </Container>
      <p className="line-clamp-2 min-h-[40px]">
        これはとても長い文章です。表示領域が限られている場合は、2行まで表示し、それ以上は「…」で省略されます。
      </p>
    </main>
  );
}
