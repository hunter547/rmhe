import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link, useStaticQuery } from "gatsby";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import * as MarqueeStyles from "../styles/components/marquee.module.css";

type MarqueeNodes = {
  node: {
    text: string;
    icon?: { name: IconName; color: string };
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
            icon {
              name
              color
            }
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
      {nodes.map(({ text, icon, link }, i) => {
        return (
          <React.Fragment key={text}>
            <div
              className={`${MarqueeStyles.item} flex items-center justify-center`}
              style={{
                left: `max(calc(300px * ${nodes.length}), 100%)`,
                animationDelay: `calc(35s / ${nodes.length} * (${nodes.length - (i + 1)} * -1)`,
              }}
            >
              {icon && (
                <FontAwesomeIcon icon={["fab", icon.name]} color={icon.color} />
              )}
              <MarqueeTextLinkFormatter text={text} link={link} />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

function MarqueeTextLinkFormatter({
  text,
  link,
}: Omit<MarqueeNodes["node"], "icon">) {
  if (link) {
    const splitText = text.split(link.replacement_word);
    return (
      <p>
        {splitText[0]}
        <span>
          <Link to={link.url} target="_blank">
            {link.replacement_word}
          </Link>
        </span>
        {splitText[1]}
      </p>
    );
  }
  return <p>{text}</p>;
}

export default Marquee;
