import { create } from "@/actions/book";
import BookForm from "../book-form";
import prisma from "@/lib/db";

export default async function BookAdd() {
  const authors = await prisma.author.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return <BookForm action={create} authors={authors} />;
}
