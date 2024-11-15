"use client";

import React from "react";
import { Dock, DockIcon } from "../ui/dock";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { WhatsappSvg } from "../svg/WhatsappSvg";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className="absolute bottom-10 left-[50%] transform translate-x-[-50%]">
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2">
          <Link href="#">
            <Twitter />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2">
          <Link href="#">
            <Facebook className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2">
          <Link href="#">
            <Instagram className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2">
          <Link href="#">
            <WhatsappSvg className="size-full" />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
