export default function PostCard(prop: { title: string, desc: string, index: number }) {
  return (
    <div className="py-4" key={prop.index}>
      <h2 className="font-semibold">{prop.title}</h2>
      <p className="">{prop.desc}</p>
    </div>
  );
}
