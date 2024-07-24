import prisma from "@/lib/db";
import Link from "next/link";
import DeleteButton from "./delete-button";

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
      <header className="flex items-center justify-between mb-4 max-w-80">
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
                <DeleteButton id={book.id} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
