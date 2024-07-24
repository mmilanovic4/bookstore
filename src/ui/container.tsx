import Link from "next/link";
import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  children: any;
}>;

export default function Container(props: ContainerProps) {
  return (
    <div className="container mx-auto min-h-screen">
      <nav className="rounded mt-4 p-4 bg-teal-900 text-white">
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/authors">Authors</Link>
          </li>
          <li>
            <Link href="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <main className="p-4">{props.children}</main>
    </div>
  );
}
