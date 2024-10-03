export function FieldInfo({
  primaryText,
  secondaryText
}: {
  primaryText?: string;
  secondaryText?: string;
}) {
  return (
    <p>
      {primaryText && <b>{primaryText}</b>}
      {secondaryText}
    </p>
  );
}
