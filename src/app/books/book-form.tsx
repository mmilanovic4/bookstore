"use client";
import { redirect } from "next/navigation";
import Button from "./button";

type BookFormProps = {
  action?: any;
  data?: any;
  id?: any;
  authors: any;
};

export default function BookForm(props: BookFormProps) {
  return (
    <form
      action={async (formData) => {
        const res = await props.action(formData);
        if (res && "error" in res) {
          alert(res.error);
        } else {
          redirect("/books");
        }
      }}
      className="my-4 inline-flex flex-col"
    >
      {"id" in props ? (
        <input type="hidden" name="id" value={props.id} />
      ) : null}
      <label className="inline-flex items-center justify-between py-2">
        <span className="w-32">Title</span>
        <input
          className="h-10 rounded border border-zinc-600 px-2 py-1 transition"
          name="title"
          defaultValue={"data" in props ? props.data.title : ""}
        />
      </label>
      <label className="inline-flex items-center justify-between py-2">
        <span className="w-32 min-w-32">Author</span>
        <select
          className="h-10 w-full appearance-none rounded border border-zinc-600 px-2 py-1 transition"
          name="author"
          defaultValue={"data" in props ? props.data.author.id : ""}
        >
          {props.authors.map((author: any) => {
            return (
              <option key={author.id} value={author.id}>
                {`${author.firstName} ${author.lastName}`.trim()}
              </option>
            );
          })}
        </select>
      </label>
      <div className="flex items-center py-4">
        <Button />
      </div>
    </form>
  );
}
