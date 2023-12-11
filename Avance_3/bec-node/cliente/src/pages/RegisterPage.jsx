import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/catalogo");
  }, [isAuthenticated]);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-3xl font-bold">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="firstnames">Nombres:</Label>
          <Input
            type="text"
            name="firstnames"
            placeholder="Escribe tus nombres"
            {...register("firstnames")}
            autoFocus
          />
          {errors.firstnames?.message && (
            <p className="text-red-500">{errors.firstnames?.message}</p>
          )}

          <Label htmlFor="lastnames">Apellidos:</Label>
          <Input
            type="text"
            name="lastnames"
            placeholder="Escribe tus apellidos"
            {...register("lastnames")}
            autoFocus
          />
          {errors.lastnames?.message && (
            <p className="text-red-500">{errors.lastnames?.message}</p>
          )}

          <Label htmlFor="rut">RUT:</Label>
          <Input
            name="rut"
            placeholder="12.345.678-9"
            {...register("rut")}
          />
          {errors.rut?.message && (
            <p className="text-red-500">{errors.rut?.message}</p>
          )}

          <Label htmlFor="email">Email:</Label>
          <Input
            name="email"
            placeholder="youremail@domain.tld"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}

          <Label htmlFor="address">Direccion:</Label>
          <Input
            name="address"
            placeholder="Av. Del Libertador 123"
            {...register("address")}
          />
          {errors.address?.message && (
            <p className="text-red-500">{errors.address?.message}</p>
          )}

          <Label htmlFor="phone">Telefono:</Label>
          <Input
            name="phone"
            placeholder="+56 9 1234 5678" 
            {...register("phone")}
          />
          {errors.phone?.message && (
            <p className="text-red-500">{errors.phone?.message}</p>
          )}

          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}

          <Label htmlFor="confirmPassword">Confirm Password:</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          )}
          <Button>Submit</Button>
        </form>
        <p>
          Already Have an Account?
          <Link className="text-sky-500" to="/login">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;
