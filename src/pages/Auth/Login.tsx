import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Logo from "../../assets/PlayTech.png";
import { Link, useNavigate } from "react-router-dom";

import { useLoginMutation } from "@/redux/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { loginFailure, loginStart, loginSuccess } from "@/redux/features/auth/authSlice";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().min(2, { message: "Email deve ter pelo menos 2 caracteres" }).max(50).email({ message: "Email inválido" }),
  password: z.string().min(2, { message: "Senha deve ter pelo menos 2 caracteres" }).max(50),
});

const Login = () => {
  const [loginUser] = useLoginMutation();

  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(loginStart());
    try {
      const res = await loginUser(values).unwrap();

      dispatch(loginSuccess(res));
      console.log(res);
    } catch (error) {
      dispatch(loginFailure((error as any).data || "Login Falhou"));
    }
  }

  useEffect(() => {
    if (token) {
      navigate("/logged");
    }
  }, [onSubmit]);
  return (
    <>
      <div className="w-full h-full  flex items-center justify-center flex-col">
        <div>
          <img src={Logo} alt="" className="p-[1.5rem]" />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-primary text-white w-[50%] h-[70%] flex items-center justify-center flex-col rounded-xl ">
            <div className="w-[100%] h-[65%] flex items-center justify-around flex-col">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu Email" {...field} className="py-[1.5rem]" />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-[50%] py-[1rem]">
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite sua senha" className="py-[1.5rem]" type="password" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-secondary hover:bg-white hover:text-black my-[1rem] px-[2rem] py-[1rem]">
                Entrar
              </Button>
              <Link to="/register" className="text-[.8rem]">
                Cadastrar
              </Link>
            </div>
            {error && <p>{error}</p>}
          </form>
        </Form>
      </div>
    </>
  );
};

export default Login;
