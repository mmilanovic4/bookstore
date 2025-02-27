import prisma from "@/lib/db";
import Link from "next/link";
import ButtonDelete from "./button-delete";

export default async function BookList() {
  const books = await prisma.book.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      author: true,
    },
    take: 10,
    skip: 0,
  });
  const total = await prisma.book.count();
  return (
    <>
      <header className="mb-4 flex max-w-80 items-center justify-between">
        <h1>
          <strong>Books</strong> ({total})
        </h1>
        <Link href="/books/add">Add new</Link>
      </header>
      <ul className="inline-flex flex-col gap-2">
        {books.map((book) => {
          return (
            <li
              key={book.id}
              className="inline-flex items-center justify-between"
            >
              <div className="w-64">{book.title}</div>
              <div className="w-64">
                {`${book.author.firstName} ${book.author.lastName}`.trim()}
              </div>
              <div className="flex items-center gap-2">
                <Link href={`/books/${book.id}`}>Edit</Link>
                <ButtonDelete id={book.id} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
