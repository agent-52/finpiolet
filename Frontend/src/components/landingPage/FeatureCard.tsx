export const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => {
  return (
    <div>
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
