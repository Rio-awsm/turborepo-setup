"use client";
import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#1e1e1e",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
          width: "400px",
        }}
      >
        <h1 style={{ color: "white", fontSize: "20px", marginBottom: "16px" }}>
          Join a Room
        </h1>
        <div style={{ width: "100%", marginBottom: "12px" }}>
          <TextInput
            size="small"
            placeholder="Room name"
            onChange={(event) => setRoomId(event.target.value)}
          />
        </div>
        <button
          style={{
            width: "100%",
            background: "#007bff",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#0056b3")
          }
          onMouseOut={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#007bff")
          }
          onClick={() => router.push(`/chat/${roomId}`)}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
