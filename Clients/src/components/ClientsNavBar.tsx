import Link from "next/link";

export default function ClientNavBar() {
  return (
    <header>
      <nav>
        <Link href="/">Trang chủ</Link>
        <Link href="/about">Về chúng tôi</Link>
        <Link href="/contact">Liên hệ</Link>
      </nav>
    </header>
  );
}
