import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/todo-list">Todo List</Link>
    </nav>
  );
};