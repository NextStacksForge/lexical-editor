"use client";
import Editor from "@/components/richText/lexical-editor";
import React from "react";

export default function EditorPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mon Éditeur Lexical</h1>
      <div className="bg-gra shadow-md rounded-lg p-6">
        <Editor />
      </div>
    </div>
  );
}
