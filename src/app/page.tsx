import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPortfolios } from "@/lib/api";
import PortfolioItem from "./_components/portfolio-item";
import BlogItem from "./_components/blog-item";
import LinkBlue from "./_components/link-blue";

export default function Index() {
  const allPortfolios = getAllPortfolios();

  console.log(allPortfolios);
  

  return (
    <main>
      <div className="overflow-x-auto">
        <div className="flex gap-sm p-sm w-max">
          {allPortfolios.map((portfolio)=>{return <PortfolioItem title={portfolio.title} src={portfolio.coverImage} slug={portfolio.slug} key={portfolio.slug}/>})}
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
