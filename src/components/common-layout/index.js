import { currentUser } from '@clerk/nextjs/server'
import Header from "../header";
import { fetchProfileAction } from '@/actions';

async function CommonLayout({ children }) {

  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);
  return (
    <div className="mx-auto m-w-7xl p-6 lg:px-8">
      <Header profileInfo={profileInfo} user={JSON.parse(JSON.stringify(user))}/>
      <main>{children}</main>
    </div>
  );
}

export default CommonLayout;