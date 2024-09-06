"use client";

import { SessionParamsContextProvider } from "@/helpers";
import { DataTypeSelector, DropZone, Bootstrap, Result } from "@/components";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Header title="Krippendorff's Alpha Calculator" />
      <SessionParamsContextProvider>
        <DropZone />
        <DataTypeSelector />
        <Bootstrap />
        <Result />
      </SessionParamsContextProvider>
      <Footer />
    </main>
  );
}
