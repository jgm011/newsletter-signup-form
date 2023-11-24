import Form from "./Form";
import MainText from "./MainText";

function MainContent(props: {
  setSuccess: (arg0: boolean) => void;
  email: string;
  setEmail: (arg0: string) => void;
}) {
  return (
    <div className="text-container">
      <MainText />
      <Form
        setSuccess={props.setSuccess}
        email={props.email}
        setEmail={props.setEmail}
      />
    </div>
  );
}

export default MainContent;
