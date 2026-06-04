import "../styles/components/header-plain-text.css";

function HeaderPlainText({ text, as: Tag = "span", className = "" }) {
  return (
    <Tag className={`header-plain-text ${className}`}>
      {text}
    </Tag>
  );
}

export default HeaderPlainText;