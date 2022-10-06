import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  return (
    <header className="sticky flex px-12 justify-between space-x-4 top-0 z-50 py-6 backdrop-blur-sm bg-opacity-75 bg-white dark:bg-black shadow-sm">
      <Image
        src="/assets/RickyColored.svg"
        alt="Ricky.cat Logo"
        width={48}
        height={48}
      />

      <div className="flex justify-between items-center space-x-4">
        <Link href="/" passHref>
          <Button type="link" style="glass">
            Home
          </Button>
        </Link>

        <Link href="/explore" passHref>
          <Button type="link" style="glass">
            Explore
          </Button>
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <Link href="/auth/login" passHref>
          <Button type="link" style="primary">
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
}
