interface Field {
  label: string;
  value: string;
}

export default function TitleBlock({ fields }: { fields: Field[] }) {
  return (
    <div className="border border-line-strong">
      {fields.map((field, i) => (
        <div
          key={field.label}
          className={`flex items-baseline justify-between gap-6 px-4 py-2.5 ${
            i > 0 ? "border-t border-line" : ""
          }`}
        >
          <span className="annotation">{field.label}:</span>
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink text-right">
            {field.value}
          </span>
        </div>
      ))}
    </div>
  );
}
