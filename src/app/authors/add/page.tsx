import { create } from "@/actions/author";
import AuthorForm from "../author-form";

export default async function AuthorAdd() {
  return <AuthorForm action={create} />;
}
