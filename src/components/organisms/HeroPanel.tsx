import Image from 'next/image';
import BrandLogo from '@/components/atoms/BrandLogo';
import SocialLinks from '@/components/molecules/SocialLinks';
import Divider from '@/components/atoms/Divider';

const HERO_IMAGE =
  'https://res.cloudinary.com/dsucs2hhi/image/upload/v1705352137/audaces/hero-fashion-design.jpg';

const HeroPanel = () => (
  <aside className="relative hidden min-h-screen w-[48%] flex-col justify-between overflow-hidden bg-brand-navy lg:flex">
    <Image
      src={HERO_IMAGE}
      alt="Profissional utilizando solução Audaces"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="relative flex h-full flex-col justify-between p-16 text-white">
      <div className="flex flex-col gap-12">
        <BrandLogo />
        <div className="max-w-md text-lg text-white/80">
          <p>
            Entre com seus dados e acesse Audaces Automação e Economia Industrial. Esta conta será utilizada para clientes e parceiros.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Divider />
        <div className="flex items-center justify-between">
          <span className="text-sm uppercase tracking-[0.2em] text-white/60">Siga a Audaces</span>
          <SocialLinks />
        </div>
      </div>
    </div>
  </aside>
);

export default HeroPanel;
