import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label } from "../components/ui";

import { useReservations } from "../context/reservationsContext";
import { useDocuments } from "../context/documentsContext";
import { useForm } from "react-hook-form";

export function ReservationFormPage() {
  const { createReservation, getReservation, updateReservation } = useReservations();
  const { documents, getDocuments } = useDocuments();
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
        updateReservation(params.id, {
          ...data,
        });
      } else {
        createReservation({
          ...data,
        });
      }

      navigate("/reservations");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadReservation = async () => {
      if (params.id) {
        const reservation = await getReservation(params.id);
        setValue("document", reservation.document.title);
        setValue("user", reservation.user._id);
        setValue("returned", reservation.returned);
      }
    };
    loadReservation();
  }, []);

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-3">
          <Label htmlFor="document"></Label>
          <Input
            type="text"
            name="document"
            placeholder="document"
            autoFocus
            disabled
          />
        </div>
        <div className="col-md-3">
          <Label htmlFor="user"></Label>
          <Input
            type="text"
            name="user"
            placeholder="user"
            autoFocus
            disabled
            />
        </div>
        <div className="col-md-3">
          <Label htmlFor="returned">DEVUELTO</Label>
          <input {...register("returned")} type="checkbox" value="" className="form-check-input"/>
          <br />
        </div>
        <div className="col-md-3">
          <Label htmlFor="pickedUpOn">RETIRADO EN</Label>
          <Input type="date" name="pickedUpOn" {...register("pickedUpOn")} />
        </div>
      </div>
      <Button>Save</Button>
    </form>
  );
}
