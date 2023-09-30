type GreetingsIconProps = {
  width?: string;
  height?: string;
  fill?: string;
};

export const GreetingsIcon = (props: GreetingsIconProps) => (
  <svg
    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-fontSizeLarge css-1shn170"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="EmojiPeopleIcon"
    tabIndex={-1}
    {...props}
  >
    <circle cx={12} cy={4} r={2} />
    <path d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54C8.24 6.99 6 4.75 6 2H4c0 3.16 2.11 5.84 5 6.71V22h2v-6h2v6h2V10.05L18.95 14l1.41-1.41-4.47-4.48z" />
  </svg>
);
