export default function BookPostCard(prop: { title: string, desc: string, index: number, author: string, rating: number, }) {
  return (
    <div className="p-4 my-2 text-white border-2 rounded-lg bg-black/40" key={prop.index}>
      <h2 className="font-semibold">{prop.title}</h2>
      <h3 className="italic ">{prop.author}</h3>
      <p className="">{prop.desc}</p>
      <b>Arvosana: {prop.rating}/5</b>
    </div>
  );
}
