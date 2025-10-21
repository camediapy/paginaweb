export default function FeatureCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-card p-6">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  );
}