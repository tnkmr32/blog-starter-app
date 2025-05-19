import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { getPortfolioBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Portfolio(props: Params) {
  const params = await props.params;
  const portfolio = getPortfolioBySlug(params.slug);

  if (!portfolio) {
    return notFound();
  }

  const content = await markdownToHtml(portfolio.content || "");

  return (
    <main>
      <Container>
        {/* タイトル */}
        <h1 className="pt-sm px-sm">{portfolio.title}</h1>

        <article className="mb-md">
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPortfolioBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}
