"use client";

import {
  Building2,
  Receipt,
  Landmark,
  Award,
  FileCheck,
  Stamp,
  HeartHandshake,
  FolderOpen,
  Layers,
  Compass,
  FileText,
  ShieldCheck,
  Handshake,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Building2,
  Receipt,
  Landmark,
  Award,
  FileCheck,
  Stamp,
  HeartHandshake,
  FolderOpen,
  Layers,
  Compass,
  FileText,
  ShieldCheck,
  Handshake,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICON_MAP[name] ?? FileText;
  return <Cmp className={className} strokeWidth={1.5} />;
}
