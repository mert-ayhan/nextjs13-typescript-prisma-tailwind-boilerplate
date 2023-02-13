"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormPost() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch("/api/createPost", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const res = await data.json();
    if (!res.ok) console.log(res);
    router.refresh();
  }

  return (
    <form className="py-8" onSubmit={submitPost}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
      />
      <button type="submit">Make a new post</button>
    </form>
  );
}
