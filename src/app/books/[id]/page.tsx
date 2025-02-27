import prisma from "@/lib/db";
import BookForm from "../book-form";
import { update } from "@/actions/book";

type BookEditParams = {
  id: string;
};

type BookEditProps = {
  params: BookEditParams;
};

export default async function BookEdit(props: BookEditProps) {
  const { id } = await props.params;
  const book = await prisma.book.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      author: true,
    },
  });
  const authors = await prisma.author.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return <BookForm action={update} authors={authors} data={book} id={id} />;
}
