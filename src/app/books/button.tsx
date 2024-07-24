import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="disabled:cursor-not-allowed"
      disabled={pending}
      type="submit"
    >
      Save
    </button>
  );
}
