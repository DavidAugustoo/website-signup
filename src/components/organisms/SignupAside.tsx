import SignupForm from '@/components/organisms/SignupForm';
import SupportMessage from '@/components/molecules/SupportMessage';

const SignupAside = () => (
  <section className="flex min-h-screen w-full flex-1 flex-col items-center justify-center bg-neutral-25 p-6">
    <div className="w-full max-w-xl rounded-3xl bg-form-surface p-10 shadow-card">
      <SignupForm />
    </div>
    <div className="mt-8">
      <SupportMessage />
    </div>
  </section>
);

export default SignupAside;
