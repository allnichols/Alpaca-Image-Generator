import React from "react";

type PreviewProps = {
  styles: object;
  refProp: React.RefObject<HTMLDivElement>;
};

const Preview = ({ styles, refProp }: PreviewProps): React.ReactElement => {
  return (
    <div className="image_container" ref={refProp}>
      {Object.keys(styles).map((key: any) => {
        let imgSrc: string = `./alpaca/${
          key === "nose"
            ? "nose.png"
            : `${key}/${styles[key as keyof typeof styles]}.png`
        }`;
        return <img className={key} alt={key} key={key} src={imgSrc} />;
      })}
    </div>
  );
};

export default Preview;
