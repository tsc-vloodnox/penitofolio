"use client";

import { Button } from "@/components/ui/button";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="sm"
      className="relative flex h-9 w-9 px-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-red-500"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <SunMedium
        size={20}
        className="transistion relative m-auto hidden h-5 w-5 text-gray-500 duration-300 hover:rotate-180  dark:block dark:text-gray-300"
      />
      <Moon
        size={20}
        className="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 hover:-rotate-90 hover:fill-blue-900 dark:hidden"
      />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};
