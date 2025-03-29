import React, { ReactNode } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as MarqueeStyles from "../styles/components/marquee.module.css";
import Icon from "./icons";

type MarqueeNodes = {
  node: {
    text: string;
    bold_text?: string;
    icon?: string;
    link?: {
      url: string;
      replacement_word: string;
    };
  };
};

function Marquee() {
  const {
    allMarqueeJson: { edges },
  }: { allMarqueeJson: { edges: MarqueeNodes[] } } = useStaticQuery(graphql`
    query {
      allMarqueeJson {
        edges {
          node {
            text
            bold_text
            icon
            link {
              url
              replacement_word
            }
          }
        }
      }
    }
  `);
  const nodes = edges.map((edge) => edge.node);
  return (
    <div className={MarqueeStyles.wrapper}>
      {nodes.map(({ text, bold_text, icon, link }, i) => {
        return (
          <React.Fragment key={text}>
            <div
              className={`${MarqueeStyles.item} flex items-center justify-center`}
              style={{
                left: `max(calc(400px * ${nodes.length}), 100%)`,
                animationDelay: `calc(35s / ${nodes.length} * (${nodes.length - (i + 1)} * -1))`,
              }}
            >
              {icon && <Icon icon={icon} width={30} />}
              <MarqueeTextLinkFormatter
                text={text}
                bold_text={bold_text}
                link={link}
              />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

function MarqueeTextLinkFormatter({
  text,
  bold_text,
  link,
}: Omit<MarqueeNodes["node"], "icon">) {
  const elements: (ReactNode | string)[] = [text];
  if (link) {
    const { elsToInsert, replacementIndex: linkIndex } = orderElements(
      [elements.pop()],
      <span>
        <Link
          to={link.url}
          target="_blank"
          className="text-secondary hover:text-secondary/80"
        >
          {link.replacement_word}
        </Link>
      </span>,
      link.replacement_word,
    );
    if (elsToInsert) {
      elements.splice(linkIndex, 0, ...elsToInsert);
    }
  }
  if (bold_text) {
    const { elsToInsert, replacementIndex: boldTextIndex } = orderElements(
      elements,
      <span className="font-bold text-secondary">{bold_text}</span>,
      bold_text,
    );
    if (elsToInsert) {
      elements.splice(boldTextIndex, 1, ...elsToInsert);
    }
  }
  return <p className="text-foreground">{elements}</p>;
}

function orderElements(
  elements: (ReactNode | string)[],
  nodeToInsert: ReactNode,
  replacement_word: string,
) {
  const replacementIndex = elements.findIndex(
    (el) => typeof el === "string" && el.includes(replacement_word),
  );

  if (replacementIndex > -1) {
    const startsWith = (elements[replacementIndex] as string).startsWith(
      replacement_word,
    );
    const endsWith = (elements[replacementIndex] as string).endsWith(
      replacement_word,
    );
    const splitText = (elements[replacementIndex] as string).split(
      replacement_word,
    );
    const elsToInsert = startsWith
      ? [nodeToInsert, splitText[1]]
      : endsWith
        ? [splitText[0], nodeToInsert]
        : [splitText[0], nodeToInsert, splitText[1]];

    return { elsToInsert, replacementIndex };
  }
  return { elsToInsert: undefined, replacementIndex };
}

export default Marquee;
