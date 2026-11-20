import { Link } from "react-router-dom";

const INLINE_SOURCE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*|\*(.+?)\*/.source;
const LIST_ITEM = /^[-*]\s+/;
const HEADING = /^(#{2,4})\s+(.+)$/;

function SmartLink({ href, children }) {
  if (href.startsWith("/")) {
    return <Link to={href}>{children}</Link>;
  }
  return <a href={href}>{children}</a>;
}

function renderInline(text, keyPrefix) {
  const pattern = new RegExp(INLINE_SOURCE, "g");
  const nodes = [];
  let lastIndex = 0;
  let match = pattern.exec(text);
  while (match) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const key = `${keyPrefix}-${match.index}`;
    if (match[1] !== undefined) {
      nodes.push(
        <SmartLink key={key} href={match[2]}>
          {renderInline(match[1], key)}
        </SmartLink>
      );
    } else if (match[3] !== undefined) {
      nodes.push(<strong key={key}>{renderInline(match[3], key)}</strong>);
    } else {
      nodes.push(<em key={key}>{renderInline(match[4], key)}</em>);
    }
    lastIndex = pattern.lastIndex;
    match = pattern.exec(text);
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

function toBlocks(source) {
  const blocks = [];
  source
    .replace(/\r\n?/g, "\n")
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .forEach((chunk) => {
      const lines = chunk.split("\n").map((line) => line.trim());
      const heading = HEADING.exec(lines[0]);
      if (heading) {
        blocks.push({ type: "heading", level: heading[1].length, text: heading[2] });
        lines.shift();
        if (!lines.length) {
          return;
        }
      }
      if (LIST_ITEM.test(lines[0])) {
        const items = [];
        lines.forEach((line) => {
          if (LIST_ITEM.test(line)) {
            items.push(line.replace(LIST_ITEM, ""));
          } else {
            items[items.length - 1] += ` ${line}`;
          }
        });
        blocks.push({ type: "list", items });
      } else if (lines.every((line) => line.startsWith(">"))) {
        blocks.push({
          type: "quote",
          text: lines.map((line) => line.replace(/^>\s?/, "")).join(" "),
        });
      } else {
        blocks.push({ type: "paragraph", text: lines.join(" ") });
      }
    });
  return blocks;
}

function renderBlock(block, index) {
  const key = `block-${index}`;
  if (block.type === "heading") {
    const Heading = `h${block.level}`;
    return <Heading key={key}>{renderInline(block.text, key)}</Heading>;
  }
  if (block.type === "list") {
    return (
      <ul key={key}>
        {block.items.map((item, itemIndex) => (
          <li key={`${key}-${itemIndex}`}>{renderInline(item, `${key}-${itemIndex}`)}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote key={key}>
        <p>{renderInline(block.text, key)}</p>
      </blockquote>
    );
  }
  return <p key={key}>{renderInline(block.text, key)}</p>;
}

export default function Markdown({ source = "", className }) {
  return <div className={className}>{toBlocks(source).map(renderBlock)}</div>;
}
