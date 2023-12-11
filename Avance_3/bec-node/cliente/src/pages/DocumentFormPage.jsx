import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label } from "../components/ui";
import { useDocuments } from "../context/documentsContext";
import { useForm } from "react-hook-form";
import { Textarea } from "../components/ui/Textarea";

export function DocumentFormPage() {
  const { createDocument, getDocument, updateDocument } = useDocuments();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateDocument(params.id, {
          ...data,
        });
      } else {
        createDocument({
          ...data,
        });
      }

      navigate("/catalogo");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadDoc = async () => {
      if (params.id) {
        const doc = await getDocument(params.id);
        setValue("title", doc.title);
        setValue("author", doc.author);
        setValue('year', doc.year);
        setValue('genre', doc.genre);
        setValue('type', doc.type);
        setValue('img', doc.img);
        setValue('price', doc.price);
        setValue('stock', doc.stock);
        setValue('desc', doc.desc);
      }
    };
    loadDoc();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          {...register("title")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Please enter a title.</p>
        )}

        <Label htmlFor="author">author</Label>
        <Input
          type="text"
          name="author"
          placeholder="author"
          {...register("author")}
          autoFocus
        />
        {errors.author && (
          <p className="text-red-500 text-xs italic">Please enter author.</p>
        )}

        <Label htmlFor='year'>year</Label>
        <Input
          type="number"
          name='year'
          placeholder='year'
          {...register('year', { valueAsNumber: true })}
          autoFocus
        />
        {errors.year && (
          <p className="text-red-500 text-xs italic">Please enter year.</p>
        )}

        <Label htmlFor='type'>type</Label>
        <Input
          type="number"
          name='type'
          placeholder='type'
          {...register('type', { valueAsNumber: true })}
          autoFocus
        />
        {errors.type && (
          <p className="text-red-500 text-xs italic">Please enter type.</p>
        )}

        <Label htmlFor='genre'>genre</Label>
        <Input
          type="number"
          name='genre'
          placeholder='genre'
          {...register('genre', { valueAsNumber: true })}
          autoFocus
        />
        {errors.genre && (
          <p className="text-red-500 text-xs italic">Please enter genre.</p>
        )}

        <Label htmlFor="img">img</Label>
        <Input
          type="text"
          name="img"
          placeholder="img"
          {...register("img")}
          autoFocus
        />
        {errors.img && (
          <p className="text-red-500 text-xs italic">Please enter img.</p>
        )}

        <Label htmlFor='price'>price</Label>
        <Input
          type="number"
          name='price'
          placeholder='price'
          {...register('price', { valueAsNumber: true })}
          autoFocus
        />

        <Label htmlFor='stock'>stock</Label>
        <Input
          type="number"
          name='stock'
          placeholder='stock'
          disabled
          autoFocus
        />

        <Label htmlFor="desc">desc</Label>
        <Textarea
          name="desc"
          id="desc"
          rows="3"
          placeholder="desc"
          {...register("desc")}
        ></Textarea>

        {errors.price && (
          <p className="text-red-500 text-xs italic">Please enter price.</p>
        )}

        <Button>Save</Button>
      </form>
    </Card>
  );
}
