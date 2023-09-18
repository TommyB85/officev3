import { MenuItems } from "@/constants";

export default function Menu() {
  return (
    <main className="min-w-screen h-12 bg-blue-300 flex items-center">
      {MenuItems.map(({ name, path }, key) => (
        <a
          key={key}
          href={path}
          className="text-white hover:text-black ml-5 cursor-pointer"
        >
          {name}
        </a>
      ))}
    </main>
  );
}
