import Container from "@/app/_components/container";
import Link from "./link";

export function Footer() {
  return (
    <footer className="bg-base text-white">
      <Container className="items-center py-xl text-sm">
        {/* TODO: リンク先の修正 */}
        <Link href="/">免責事項</Link>
        <div>copyright@t-nakamura</div>
      </Container>
    </footer>
  );
}

export default Footer;
