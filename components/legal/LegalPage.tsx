import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { ReactNode } from "react";

function inline(text: string, key: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = `${key}-${i++}`;
    if (m[1]) out.push(<strong key={k} className="font-semibold text-white">{m[1]}</strong>);
    else if (m[2]) out.push(<em key={k}>{m[2]}</em>);
    else {
      const href = m[4].replace(/^https?:\/\/(www\.)?floowtix\.com/, "") || "/";
      out.push(
        <Link key={k} href={href} className="text-[#3C89FF] underline underline-offset-4 hover:text-[#6FA8FF]">
          {m[3]}
        </Link>
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function render(md: string): ReactNode[] {
  const blocks: ReactNode[] = [];
  const lines = md.replace(/\r/g, "").split("\n");
  let para: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;

  const flushPara = () => {
    if (!para.length) return;
    const k = `p${blocks.length}`;
    blocks.push(
      <p key={k} className="mb-5 leading-relaxed text-[#B5C0D3]">
        {para.flatMap((l, i) => (i ? [<br key={`${k}br${i}`} />, ...inline(l, `${k}${i}`)] : inline(l, `${k}${i}`)))}
      </p>
    );
    para = [];
  };
  const flushList = () => {
    if (!list) return;
    const k = `l${blocks.length}`;
    const cls = `mb-6 space-y-2 pl-6 text-[#B5C0D3] marker:text-[#3C89FF] ${list.ordered ? "list-decimal" : "list-disc"}`;
    const items = list.items.map((it, i) => (
      <li key={i} className="pl-1 leading-relaxed">
        {inline(it, `${k}${i}`)}
      </li>
    ));
    blocks.push(list.ordered ? <ol key={k} className={cls}>{items}</ol> : <ul key={k} className={cls}>{items}</ul>);
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const h = /^(#{1,3})\s+(.*)$/.exec(line);
    const ul = /^\s*-\s+(.*)$/.exec(line);
    const ol = /^\s*\d+\.\s+(.*)$/.exec(line);
    if (!line.trim()) {
      flushPara();
      flushList();
    } else if (h) {
      flushPara();
      flushList();
      const k = `h${blocks.length}`;
      if (h[1].length === 1)
        blocks.push(
          <h1 key={k} className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {inline(h[2], k)}
          </h1>
        );
      else
        blocks.push(
          <h2 key={k} className="mb-4 mt-10 text-xl font-semibold text-white sm:text-2xl">
            {inline(h[2], k)}
          </h2>
        );
    } else if (ul || ol) {
      flushPara();
      const ordered = !!ol;
      if (list && list.ordered !== ordered) flushList();
      if (!list) list = { ordered, items: [] };
      list.items.push((ul ?? ol)![1]);
    } else {
      flushList();
      para.push(line.trim());
    }
  }
  flushPara();
  flushList();
  return blocks;
}

export default function LegalPage({ file }: { file: string }) {
  const md = fs.readFileSync(path.join(process.cwd(), "content/legal", file), "utf8");
  return (
    <div className="px-5 pb-24 pt-32 sm:px-6 sm:pt-36">
      <article className="mx-auto max-w-3xl">{render(md)}</article>
    </div>
  );
}
