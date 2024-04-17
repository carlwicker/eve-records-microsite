interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Eve Records Contact Form</h1>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);
