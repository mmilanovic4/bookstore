import prisma from "@/lib/db";
import Link from "next/link";
import DeleteButton from "./delete-button";

export default async function AuthorList() {
  const authors = await prisma.author.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      books: true,
    },
    take: 10,
    skip: 0,
  });
  const total = await prisma.author.count();
  return (
    <>
      <header className="flex items-center justify-between mb-4 max-w-80">
        <h1>
          <strong>Authors</strong> ({total})
        </h1>
        <Link href="/authors/add">Add new</Link>
      </header>
      <ul className="inline-flex flex-col gap-2 max-w-80">
        {authors.map((author) => {
          return (
            <li
              key={author.id}
              className="inline-flex items-center justify-between"
            >
              <div className="w-64">
                {`${author.firstName} ${author.lastName}`.trim()}
              </div>
              <div className="flex items-center gap-2">
                <Link href={`/authors/${author.id}`}>Edit</Link>
                <DeleteButton id={author.id} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
