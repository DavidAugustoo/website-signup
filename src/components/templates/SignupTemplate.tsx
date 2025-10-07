import HeroPanel from '@/components/organisms/HeroPanel';
import SignupAside from '@/components/organisms/SignupAside';

const SignupTemplate = () => (
  <main className="flex min-h-screen flex-col bg-neutral-25 lg:flex-row">
    <HeroPanel />
    <SignupAside />
  </main>
);

export default SignupTemplate;
