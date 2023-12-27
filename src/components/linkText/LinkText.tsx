interface LinkTextProps {
  to: string;
  title: string;
  text: string;
}

export function LinkText({ to, title, text }: LinkTextProps) {
  return (
    <a
      href={to || "#"}
      target="_blank"
      rel="noopener noreferrer"
      title={title || ""}
    >
      {text}
    </a>
  );
}
