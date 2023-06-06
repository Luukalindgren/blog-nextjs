import Link from "next/link";
import Rating from "@mui/material/Rating";

export default function BookPostPreview(prop: {
  title: string;
  desc: string;
  index: number;
  author: string;
  rating: number;
}) {
  return (
    <div
      className="py-2 mt-4 duration-300 rounded-lg shadow-lg hover:scale-105"
      key={prop.index}
    >
      <Link href={`/books/#${prop.index}`}>
        <h2 className="font-semibold text-center">{prop.title}</h2>
        <h3 className="mb-4 text-sm italic text-center">{prop.author}</h3>
        <Rating
          defaultValue={prop.rating}
          precision={0.5}
          size="small"
          readOnly
        />
      </Link>
    </div>
  );
}
