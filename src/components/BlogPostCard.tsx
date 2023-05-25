export default function BlogPostCard(prop: { title: string, desc: string, index: number}) {
    return (
      <div className="p-4 my-2 text-white border-2 rounded-lg bg-black/40" key={prop.index}>
        <h2 className="font-semibold">{prop.title}</h2>
        <p className="">{prop.desc}</p>
      </div>
    );
  }
  