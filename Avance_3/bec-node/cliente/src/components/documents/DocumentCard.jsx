import { useDocuments } from "../../context/documentsContext";
import { Button, ButtonLink, Card } from "../ui";

export function DocumentCard({ document }) {
  const { deleteDocument } = useDocuments();

  return (
    <Card>
      <img src={document.img} />
      <p className="text-slate-300">{document.title}</p>
      <p className="text-slate-300">{document.author}</p>
      <p className="text-slate-300">{document.year}</p>
      <p className="text-slate-300">{document.genre}</p>
      <p className="text-slate-300">{document.type}</p>
      <p className="text-slate-300">{document.price}</p>
      <div className="flex gap-x-2 items-center">
        <ButtonLink to={`/document/${document._id}`}>GO</ButtonLink>
      </div>
    </Card>
  );
}
