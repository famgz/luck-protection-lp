import LogoImage from 'src/components/LogoImage';
import LogoText from 'src/components/LogoText';

export default function Home() {
  return (
    <>
      <h1 className="text-primary bg-background-darker">Hello World</h1>
      <LogoImage color="fill-primary" size={24} />
      <LogoText color="fill-secondary" position="vertical" size={12} />
    </>
  );
}
