import Link from "next/link";

export default function BlogPostCard(prop: {
  title: string;
  index: number;
  date: string;
}) {
  const formattedDate = prop.date.split("T")[0].split("-").reverse().join(".");

  return (
    <div className="py-2 mt-4 rounded-lg shadow-lg" key={prop.index}>
      <Link href={`/blog/#${prop.index}`}>
        <h2 className="font-semibold text-center">{prop.title}</h2>
        <h3 className="mb-4 text-sm italic text-center">{formattedDate}</h3>
      </Link>
    </div>
  );
}
