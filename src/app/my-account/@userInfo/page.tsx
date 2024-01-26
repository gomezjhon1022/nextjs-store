import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export const dynamic = 'force-dynamic';

export default async function MyAccountPage() {
  const customer = await validateAccessToken();

  return (
    <div>
      <section>
        <p>Name: {customer?.firstName}</p>
        <p>email: {customer?.email}</p>
      </section>
    </div>
  );
}