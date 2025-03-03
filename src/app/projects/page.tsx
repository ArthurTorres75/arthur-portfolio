"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return <div>{t("projects")}</div>;
}
