interface CatBadgeProps {
  cat: string;
  catC: string;
}

export function CatBadge({ cat, catC }: CatBadgeProps) {
  return <span className={`badge badge--${catC}`}>{cat}</span>;
}
