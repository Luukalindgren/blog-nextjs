export default function BlogPostCard(prop: {
  title: string;
  desc: string;
  index: number;
  date: string;
}) {
  const formattedDate = prop.date.split("T")[0].split("-").reverse().join(".");

  return (
    <div id={`${prop.index}`} className="p-4 my-4 rounded-lg shadow-lg bg-black/10" key={prop.index}>
      <h2 className="font-semibold text-center">{prop.title}</h2>
      <h3 className="mb-4 text-sm italic text-center">{formattedDate}</h3>
      {prop.desc.split("\n").map((paragraph, index) => (
        <p key={index}>
          {paragraph}
          <br />
        </p>
      ))}
    </div>
  );
}
