import Link from "next/link";

export default function BookPostPreview(prop: {
  title: string;
  desc: string;
  index: number;
  author: string;
  rating: number;
}) {
  return (
    <div className="py-2 mt-4 rounded-lg shadow-lg " key={prop.index}>
      <Link href={`/books/#${prop.index}`}>
        <h2 className="font-semibold text-center">{prop.title}</h2>
        <h3 className="mb-4 text-sm italic text-center">{prop.author}</h3>
        <p className="mt-4 mb-2 font-semibold text-center">
          Arvosana: {prop.rating}/5
        </p>
      </Link>
    </div>
  );
}
