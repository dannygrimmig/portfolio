type SplitPageLayoutProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export function SplitPageLayout(props: SplitPageLayoutProps) {
  const { left, right } = props;
  return (
    <main className="sm:grid grid-cols-5 min-h-[calc(100vh-74px)]">
      <div className="sm:col-span-3 border-r border-black">{left}</div>

      <div className="sm:col-span-2 px-4 pt-8 bg-sky-100">{right}</div>
    </main>
  );
}
