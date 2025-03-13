// app/providers.tsx (NEW FILE)
"use client";

import React from "react";
import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            enableSystem
            defaultTheme="dark"
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
}