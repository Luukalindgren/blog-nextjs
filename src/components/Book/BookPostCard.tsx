import { Rating } from "@mui/material";

export default function BookPostCard(prop: {
  title: string;
  desc: string;
  index: number;
  author: string;
  rating: number;
}) {
  return (
    <div
      id={`${prop.index}`}
      className="p-4 my-4 rounded-lg shadow-lg bg-black/10"
      key={prop.index}
    >
      <h2 className="font-semibold text-center">{prop.title}</h2>
      <h3 className="mb-4 text-sm italic text-center">{prop.author}</h3>
      {prop.desc.split("\n").map((paragraph, index) => (
        <p key={index}>
          {paragraph}
          <br />
        </p>
      ))}
      <div className="pt-4 text-center">
        <Rating defaultValue={prop.rating} precision={0.5} readOnly />
      </div>
    </div>
  );
}
