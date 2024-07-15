import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link, useStaticQuery } from "gatsby";
import "./styles.css";
import { IconName } from "@fortawesome/fontawesome-svg-core";

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
    <div className="logos">
      {Array(2)
        .fill(undefined)
        .map((_, i) => (
          <div key={i} className="logos-slide">
            <div className="flex items-center">
              {nodes.map(({ text, icon, link }) => (
                <div key={text} className="flex items-center mr-10">
                  {icon && (
                    <FontAwesomeIcon
                      icon={["fab", icon.name]}
                      color={icon.color}
                    />
                  )}
                  <MarqueeTextLinkFormatter text={text} link={link} />
                </div>
              ))}
            </div>
          </div>
        ))}
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
