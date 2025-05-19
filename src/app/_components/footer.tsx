import Container from "@/app/_components/container";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-base">
      <Container className="items-center py-xl text-sm">
        {/* TODO: リンク先の修正 */}

        <Link href="/" className="hover:underline">
          <p className="text-white">免責事項</p>
        </Link>
        <p className="text-white">copyright@t-nakamura</p>
      </Container>
    </footer>
  );
}

export default Footer;
