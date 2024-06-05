import { CiSearch } from 'react-icons/ci';

export default function SearchBox() {
  return (
    <div className="inline-flex h-[50px] w-[min(372px,100%)] items-center justify-start gap-4 rounded-lg border p-4 text-light hover:border-primary">
      <CiSearch size={16} className="font-bold text-muted" />
      <span>Pesquisar</span>
    </div>
  );
}
