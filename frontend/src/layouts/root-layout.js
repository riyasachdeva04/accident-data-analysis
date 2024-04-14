import { Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
 
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
export default function RootLayout() {
  const navigate = useNavigate();
 
  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      {/* <header className="header">
        <div>
          <SignedIn>
            <UserButton afterSignOutUrl='/sign-in' />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
          </SignedOut>
        </div>
      </header> */}
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}