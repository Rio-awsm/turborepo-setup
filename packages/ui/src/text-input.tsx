interface PropType {
  placeholder: string;
  size: "big" | "small";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({ placeholder, size, onChange }: PropType) {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      style={{
        padding: size === "big" ? "14px 22px" : "10px 14px",
        margin: size === "big" ? "14px" : "4px",
        border: "2px solid #5A9BEF",
        borderRadius: "6px",
        fontSize: size === "big" ? "16px" : "14px",
        width: "360px",
        outline: "none",
        backgroundColor: "#f8f9fa",
        color: "#333",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
      onFocus={(e) => {
        e.target.style.borderColor = "#357ABD";
        e.target.style.boxShadow = "0 0 6px rgba(53, 122, 189, 0.5)";
      }}
      onBlur={(e) => {
        e.target.style.borderColor = "#5A9BEF";
        e.target.style.boxShadow = "none";
      }}
    />
  );
}