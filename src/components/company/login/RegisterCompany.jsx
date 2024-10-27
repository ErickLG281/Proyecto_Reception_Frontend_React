import { createCompany } from "../../../api/company.api";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const inputField = {
  contact: [
    {
      type: "text",
      id: "floatingCompany",
      placeholder: "company name",
      label: "Company name",
      name: "nameCompany",
    },
    {
      type: "email",
      id: "floatingEmail",
      placeholder: "name@example.com",
      label: "E-mail Company",
      name: "emailCompany",
    },
    {
      type: "text",
      id: "floatingTel",
      placeholder: "0",
      label: "Phone number",
      name: "phoneNumber",
    },
  ],
  access: [
    {
      type: "text",
      id: "floatingFullName",
      placeholder: "name",
      label: "Full name",
      name: "fullName",
    },
    {
      type: "email",
      id: "floatingEmailUser",
      placeholder: "name@example.com",
      label: "E-mail",
      name: "emailUser",
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

const RegisterCompany = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await createCompany(data);
    // navigate("/company/login")
    navigate("/");
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
            <span className="font-thin text-sm">this is required</span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="mx-auto max-w-full py-8 px-4 sm:px-6 lg:flex lg:py-8 lg:px-8 items-center justify-around space-y-8">
      <img
        src="https://i.postimg.cc/4yzNPkvC/register-company.jpg"
        alt="home"
        className="rounded-3xl lg:w-1/2"
      />
      <div className="space-y-6 p-6 bg-[#26292F] rounded-xl max-w-lg">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-6">
            {formSection("Company information", inputField.contact)}
            {formSection("User data", inputField.access)}
            <p className="font-thin text-sm">
              Your password must be between 8 to 48 characters long, include at
              least one lowercase letter, one uppercase letter and one number,
              and cannot contain spaces.
            </p>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-[#e69e00] checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[#e69e00] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[#e69e00] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[#e69e00] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-[#e69d00cb] checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[#e69e00]"
                type="checkbox"
                value=""
                id="checkboxChecked"
                {...register("agreeToTerms", { required: true })}
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer text-xs"
                htmlFor="checkboxChecked"
              >
                I have read and agree to the GSS Terms of Service and Privacy
                Policy. *
              </label>
            </div>
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-[#e69d00] pb-2.5 pt-2.5 text-sm font-bold uppercase leading-normal text-black hover:bg-[#ffb20c] transition duration-300 ease-in-out"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="flex space-x-1 justify-center ">
          <p className="font-normal">Already have an account?</p>
          <Link
            to="/company/login"
            className="font-bold  text-[#e69d00] hover:text-[#ffb20c]"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
