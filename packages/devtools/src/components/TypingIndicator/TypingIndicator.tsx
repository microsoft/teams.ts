import { FC } from 'react';
import { tokens } from '@fluentui/react-components';

const TypingIndicator: FC = () => {
  return (
    // Width needs to be 49px or else a little dot is visible even after the svg is taken out of the DOM
    <svg width="49" height="20" viewBox="0 0 50 20">
      <circle cx="15" cy="10" r="3" fill={tokens.colorBrandBackground}>
        <animate attributeName="cy" values="10;5;10" dur="1s" repeatCount="indefinite" begin="0s" />
      </circle>
      <circle cx="25" cy="10" r="3" fill={tokens.colorBrandBackground}>
        <animate
          attributeName="cy"
          values="10;5;10"
          dur="1s"
          repeatCount="indefinite"
          begin="0.15s"
        />
      </circle>
      <circle cx="35" cy="10" r="3" fill={tokens.colorBrandBackground}>
        <animate
          attributeName="cy"
          values="10;5;10"
          dur="1s"
          repeatCount="indefinite"
          begin="0.3s"
        />
      </circle>
    </svg>
  );
};

export default TypingIndicator;
