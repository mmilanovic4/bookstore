import prisma from "@/lib/db";
import AuthorForm from "../author-form";
import { update } from "@/actions/author";

type AuthorEditParams = {
  id: string;
};

type AuthorEditProps = {
  params: AuthorEditParams;
};

export default async function AuthorEdit(props: AuthorEditProps) {
  const { id } = await props.params;
  const author = await prisma.author.findUnique({
    where: {
      id: Number(id),
    },
  });
  return <AuthorForm action={update} data={author} id={id} />;
}
