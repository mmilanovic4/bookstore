"use client";

import { remove } from "@/actions/book";

export default function ButtonDelete(props: any) {
  return (
    <form
      action={(formData) => {
        if (confirm("Are you sure?")) {
          remove(formData);
        }
      }}
    >
      <input type="hidden" name="id" value={props.id} />
      <button type="submit">Delete</button>
    </form>
  );
}
