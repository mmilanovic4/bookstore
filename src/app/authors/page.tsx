import AuthorList from "./author-list";
import { Suspense } from "react";

export default function Authors() {
  return (
    <>
      <Suspense fallback="Loading...">
        <AuthorList />
      </Suspense>
    </>
  );
}
