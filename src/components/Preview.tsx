import React from "react";

type Props = {
  styles: string[];
};

export default function Preview({ styles }: Props): React.ReactElement {
  return <div className="image_container"></div>;
}
