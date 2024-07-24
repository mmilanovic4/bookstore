"use client";

import { redirect } from "next/navigation";
import Button from "./button";

type AuthorFormProps = {
  action?: any;
  data?: any;
  id?: any;
};

export default function AuthorForm(props: AuthorFormProps) {
  return (
    <form
      action={async (formData) => {
        const res = await props.action(formData);
        if (res && "error" in res) {
          alert(res.error);
        } else {
          redirect("/authors");
        }
      }}
      className="my-4 inline-flex flex-col"
    >
      {"id" in props ? (
        <input type="hidden" name="id" value={props.id} />
      ) : null}
      <label className="inline-flex items-center justify-between py-2">
        <span className="w-32">First name</span>
        <input
          className="border border-zinc-600 rounded px-2 py-1 h-10 transition"
          name="firstName"
          defaultValue={"data" in props ? props.data.firstName : ""}
        />
      </label>
      <label className="inline-flex items-center justify-between py-2">
        <span className="w-32">Last name</span>
        <input
          className="border border-zinc-600 rounded px-2 py-1 h-10 transition"
          name="lastName"
          defaultValue={"data" in props ? props.data.lastName : ""}
        />
      </label>
      <div className="flex items-center py-4">
        <Button />
      </div>
    </form>
  );
}
