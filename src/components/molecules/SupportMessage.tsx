import ContactLink from '@/components/atoms/ContactLink';

const SupportMessage = () => (
  <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
    <span>Ficou com dúvidas?</span>
    <ContactLink
      href="#"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z" />
        </svg>
      }
    >
      Entre em contato com suporte
    </ContactLink>
  </div>
);

export default SupportMessage;
