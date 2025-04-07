import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";

import styles from "./CodeWindow.module.css";

interface CodeWindowProps {
  children?: ReactNode;
  codeLines: string[];
  language?: string;
  style?: SyntaxHighlighterProps["style"];
  className?: string;
  lightTheme?: boolean;
}

const CodeWindow: FC<CodeWindowProps> = ({
  children,
  codeLines,
  language,
  style,
  className,
}) => {
  const allButLast = codeLines.slice(0, -1).join("\n");
  const lastLine = codeLines[codeLines.length - 1] ?? "";

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden bg-[hsl(var(--card))] shadow-lg border w-full max-w-3xl mx-auto",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-2 border-b",
          "bg-[hsl(var(--muted))]"
        )}
      >
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div className="p-4">
        {allButLast && (
          <SyntaxHighlighter
            language={language}
            style={style}
            wrapLongLines
            customStyle={{
              margin: 0,
              padding: 0,
              fontSize: "0.875rem",
              background: "hsl(var(--card))",
              whiteSpace: "pre",
              display: "block",
              color: "hsl(var(--foreground))",
            }}
          >
            {allButLast.trimEnd()}
          </SyntaxHighlighter>
        )}

        <div className="flex items-center">
          <SyntaxHighlighter
            language={language}
            style={style}
            wrapLongLines
            customStyle={{
              margin: 0,
              padding: 0,
              fontSize: "0.875rem",
              background: "hsl(var(--card))",
              whiteSpace: "pre",
              display: "inline-block",
              color: "hsl(var(--foreground))",
            }}
          >
            {lastLine.trimEnd()}
          </SyntaxHighlighter>

          <span className={styles.blinking_cursor} style={{backgroundColor: 'var(--foreground)'}} />
        </div>
      </div>

      {children}
    </div>
  );
};

export default CodeWindow;
