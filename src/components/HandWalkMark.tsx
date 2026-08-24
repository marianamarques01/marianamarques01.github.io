type HandWalkMarkProps = {
  className?: string;
};

export default function HandWalkMark({ className }: HandWalkMarkProps) {
  return (
    <img
      src="/hand-walk.gif"
      alt=""
      aria-hidden="true"
      className={className ? `hand-walk ${className}` : "hand-walk"}
      decoding="async"
    />
  );
}
