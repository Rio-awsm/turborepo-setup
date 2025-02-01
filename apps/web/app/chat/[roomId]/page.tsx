"use client"
import { TextInput } from "@repo/ui/text-input";

export default function Page() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Chat Room</h1>
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "10px",
          backgroundColor: "#2a2a2a",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
        }}
      >
        <TextInput size="big" placeholder="Chat here" />
      </div>
    </div>
  );
}