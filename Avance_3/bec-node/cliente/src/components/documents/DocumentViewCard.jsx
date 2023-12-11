import { useDocuments } from "../../context/documentsContext";
import { Button, ButtonLink, Card } from "../ui";

export function DocumentViewCard({ document }) {
  const { deleteDocument } = useDocuments();

  return (
    <Card>
      <img src={document.img} />
      <p className="text-slate-300">{document.title}</p>
      <p className="text-slate-300">{document.author}</p>
      <p className="text-slate-300">{document.year}</p>
      <p className="text-slate-300">{document.genre}</p>
      <p className="text-slate-300">{document.type}</p>
      <p className="text-slate-300">{document.date}</p>
      <div className="flex gap-x-2 items-center">
        <Button onClick={() => deleteDocument(document._id)}>Delete</Button>
        <ButtonLink to={`/documents/${document._id}`}>Edit</ButtonLink>
      </div>
    </Card>
  );
}
