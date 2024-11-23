"use client";

import { X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="relative w-full max-w-lg bg-white shadow-lg rounded-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-2"
        >
          <X width={20} height={20}/>
        </button>
        <CardHeader className="mb-6">
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">{children}</div>
        </CardContent>
        <div className="flex justify-end p-4"></div>
      </Card>
    </div>
  );
}
