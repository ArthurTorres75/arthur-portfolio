"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/app/components/Loader/Loader";

function Home() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Cambia el tiempo según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-roboto)]">
      <section className="flex xs:flex-col sm:flex-row text-left gap-4 mt-4">
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            src="https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"
            width={350}
            height={350}
            alt="Picture of the author"
          />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold mb-4">Hola, soy Arthur</h1>
          <p className="text-lg">
            Soy un Ingeniero en Informática dedicado al desarrollo web. Me
            apasiona crear soluciones eficientes y elegantes para problemas
            complejos.
          </p>
        </div>
      </section>

      <section className="w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">{t("projects")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="border p-4 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Proyecto 1</h3>
            <p className="text-sm">Descripción breve del proyecto 1.</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Proyecto 2</h3>
            <p className="text-sm">Descripción breve del proyecto 2.</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Proyecto 3</h3>
            <p className="text-sm">Descripción breve del proyecto 3.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/projects" passHref>
            <span className="text-blue-500 hover:underline">
              Ver más proyectos
            </span>
          </Link>
        </div>
      </section>

      <section className="text-center mt-8">
        <Link href="/path/to/curriculum.pdf" passHref>
          <span className="text-blue-500 hover:underline" onClick={() => {}}>
            Descargar mi currículum
          </span>
        </Link>
      </section>
    </div>
  );
}

export default Home;
