import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import YouTubeIcon from '@/components/icons/YouTubeIcon';

const socials = [
  { href: 'https://www.facebook.com', label: 'Facebook', color: 'hover:bg-[#1877F2]/20', icon: FacebookIcon },
  { href: 'https://www.instagram.com', label: 'Instagram', color: 'hover:bg-[#E1306C]/20', icon: InstagramIcon },
  { href: 'https://www.linkedin.com', label: 'LinkedIn', color: 'hover:bg-[#0A66C2]/20', icon: LinkedInIcon },
  { href: 'https://www.youtube.com', label: 'YouTube', color: 'hover:bg-[#FF0000]/20', icon: YouTubeIcon }
];

const SocialLinks = () => (
  <ul className="flex items-center gap-3">
    {socials.map(({ href, label, icon: Icon, color }) => (
      <li key={label}>
        <a
          href={href}
          aria-label={label}
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition ${color}`}
        >
          <Icon className="h-5 w-5" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
