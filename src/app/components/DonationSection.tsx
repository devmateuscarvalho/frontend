"use client";

import { Github } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import Modal from "./Modal";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function DonationSection() {
  const [open, setOpen] = useState(false);
  const pixKey = "09243562940"; // Chave Pix
  const pixPayload = `00020126480014BR.GOV.BCB.PIX0113${pixKey}52040000530398654045.005802BR5913Nome do Recebedor6009SAO PAULO62070503***6304`; // Payload Pix

  return (
    <>
      <Card className="text-center bg-white rounded-lg shadow p-2 w-full">
        <CardHeader>
          <CardTitle className="text-md">Nos apoie com um café!</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => setOpen(true)}
            className="bg-white hover:bg-gray-100 shadow-md text-black transition px-4 py-2 text-sm rounded"
          >
            Contribua ☕
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col">
            <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Desenvolvedores
            </h3>
            </div>
            <div className="flex flex-col space-y-1">
              <a
                href="https://github.com/desenvolvedor2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black hover:text-gray-800 text-sm"
              >
                <Github className="w-4 h-4 mr-2" />
                phsilva
              </a>
              <a
                href="https://github.com/desenvolvedor1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black hover:text-gray-800 text-sm"
              >
                <Github className="w-4 h-4 mr-2" />
                devmateuscarvalho
              </a>
            </div>
        </CardFooter>
      </Card>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Contribua com R$5,00"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <QRCodeCanvas
            value={pixPayload}
            size={200}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"H"}
          />
          <p className="text-sm text-gray-600 text-center">
            Use o QR Code acima para enviar R$5,00 via Pix.
          </p>
        </div>
      </Modal>
    </>
  );
}