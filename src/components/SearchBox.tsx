import { CiSearch } from 'react-icons/ci';

export default function SearchBox() {
  return (
    <div className="inline-flex h-[44px] w-full flex-1 items-center justify-start gap-3 rounded-lg border p-4 text-light hover:border-primary">
      <CiSearch size={22} className="font-bold text-muted" />
      <span>Pesquisar</span>
    </div>
  );
}
