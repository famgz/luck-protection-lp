import { CiSearch } from 'react-icons/ci';

export default function SearchBox() {
  return (
    <div className="inline-flex h-[50px] w-[372px] items-center justify-start gap-4 rounded-lg border p-4 text-muted hover:border-primary">
      <CiSearch size={16} className="font-bold" />
      <span>Pesquisar</span>
    </div>
  );
}
