import BookList from "./book-list";
import { Suspense } from "react";

export default function Books() {
  return (
    <>
      <Suspense fallback="Loading...">
        <BookList />
      </Suspense>
    </>
  );
}
