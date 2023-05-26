export default function BlogPostCard(prop: { title: string, desc: string, index: number, date: string}) {

  const formattedDate= prop.date.split("T")[0].split("-").reverse().join(".")
  
    return (
      <div className="p-4 my-2 border-2 rounded-lg bg-black/10" key={prop.index}>
        <h2 className="font-semibold text-center">{prop.title}</h2>
        <h3 className="mb-4 text-sm italic text-center">{formattedDate}</h3>
        <p className="">{prop.desc}</p>
      </div>
    );
  }
  