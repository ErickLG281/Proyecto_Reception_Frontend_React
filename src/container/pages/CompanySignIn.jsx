import LoginCompany from "../../components/company/login/LoginCompany";

function CompanySingIn({ onLogin }) {
  return (
    <>
      <LoginCompany onLogin={onLogin}/>
    </>
  );
}
export default CompanySingIn;
