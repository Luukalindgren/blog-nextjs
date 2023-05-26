export default function BookPostCard(prop: { title: string, desc: string, index: number, author: string, rating: number, }) {
  return (
    <div className="p-4 mt-2 border-2 rounded-lg bg-black/10" key={prop.index}>
      <h2 className="font-semibold text-center">{prop.title}</h2>
      <h3 className="mb-4 text-sm italic text-center">{prop.author}</h3>
      <p className="">{prop.desc}</p>
      <p className="mt-4 mb-2 font-semibold text-center">Arvosana: {prop.rating}/5</p>
    </div>
  );
}
