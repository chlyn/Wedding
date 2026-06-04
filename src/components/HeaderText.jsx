import "../styles/components/header-text.css";

function HeaderText({ text, as: Tag = "span", className = "" }) {
  const firstLetter = text.charAt(0);
  const restOfText = text.slice(1);

  return (
    <Tag className={`header-text ${className}`}>
      <span className="header-text-capital">{firstLetter}</span>
      <span className="header-text-rest">{restOfText}</span>
    </Tag>
  );
}

export default HeaderText;