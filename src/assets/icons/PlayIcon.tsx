type MenuIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const PlayIcon = (props: MenuIconProps) => (
  <svg
    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-fontSizeLarge css-zjt8k"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="PlayCircleIcon"
    tabIndex={-1}
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z" />
  </svg>
);
