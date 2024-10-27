import { isAuthenticated } from "../../../api/user.api";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const inputField = {
  access: [
    {
      type: "email",
      id: "floatingEmailUser",
      placeholder: "name@example.com",
      label: "E-mail",
      name: "email",
    },
    {
      type: "password",
      id: "floatingPassword",
      placeholder: "Password",
      label: "Password",
      name: "password",
    },
  ],
};

const LoginCompany = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await isAuthenticated(data).then((res) => {
        if (res.data.fullName && res.data.rolName) {
          localStorage.setItem("fullName", res.data.fullName);
          localStorage.setItem("rolName", res.data.rolName);
          document.cookie = `fullName=${res.data.fullName}; max-age=${60 * 60 * 24 * 7}; path=/`;
          document.cookie = `rolName=${res.data.rolName}; max-age==${60 * 60 * 24 * 7}; path=/`;
          onLogin(res.data.fullName, res.data.rolName);
          navigate("/");
        } else {
          // Puedes manejar el caso de autenticación no exitosa aquí
          console.error("Authentication failed: Invalid data received");
          // Puedes mostrar un mensaje de error al usuario o redirigir a una página de error
        }
      });
    } catch (error) {
      console.error("Error during login:", error);
    }
  });

  const formSection = (title, form) => (
    <div className="space-y-4">
      <h1 className="font-bold text-3xl text-center">{title}</h1>
      {form.map((item) => (
        <div key={item.id} className="relative">
          <input
            type={item.type}
            className="peer m-0 block h-[58px] w-full rounded-xl bg-[#303641] bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-400 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id={item.id}
            placeholder={item.placeholder}
            {...register(item.name, { required: true })}
          />

          <label
            htmlFor={item.id}
            className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            {item.label}
          </label>
          {errors[item.name] && (
            <span className="font-thin text-sm">This field is required</span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-xl mx-auto pt-28 pb-28">
      <div className="space-y-6 bg-[#26292F] p-7 rounded-xl">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-6">
            {formSection("Company access", inputField.access)}
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-[#e69d00] pb-2.5 pt-2.5 text-sm font-bold uppercase leading-normal text-black hover:bg-[#ffb20c] transition duration-300 ease-in-out"
            >
              Log in
            </button>
          </div>
        </form>
        <div className="flex space-x-1 justify-center">
          <p className="font-normal ">Don’t you have an account?</p>
          <Link
            to="/company/register"
            className="font-bold  text-[#e69d00] hover:text-[#ffb20c]"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginCompany;
