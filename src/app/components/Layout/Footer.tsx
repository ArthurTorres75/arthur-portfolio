import { useAppContext } from "@/app/context/AppContext";
import useCurrentTime from "@/app/hooks/useCurrentTime";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { name } = useAppContext();
  const { hours, minutes, seconds } = useCurrentTime();
  const { t } = useTranslation();
  return (
    <footer className="p-4 bg-opacity-75 bg-black text-center">
      <p>
        &copy; {new Date().getFullYear()} {t("made-by")} {name}
      </p>
      <p>
        {t("current-time")}: {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </footer>
  );
}
