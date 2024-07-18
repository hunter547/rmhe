import React from "react";
import * as LoadingIconStyles from "../../../styles/components/icons/icon.loading.module.css";

function LoadingIcon({
  width,
  shouldTranslateTop,
}: {
  width: number;
  shouldTranslateTop?: boolean;
}) {
  const translationAmount = `${(width - 50) / 2}px`;
  return (
    <div
      className={LoadingIconStyles.container}
      style={{
        width: "50px",
        scale: `calc(${width} / 50)`,
        left: translationAmount,
        top: shouldTranslateTop ? translationAmount : undefined,
      }}
    >
      <div className={LoadingIconStyles.loader}></div>
    </div>
  );
}

export default LoadingIcon;
