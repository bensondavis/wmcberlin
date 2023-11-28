interface TextFieldProps {
  value: string;
  label: string;
  type: "text" | "phone" | "email";
  onError?: () => void;
  onErrorOff?: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default TextFieldProps;