import { SignIn } from "@clerk/clerk-react"
 
export default function SignInPage() {
  return( 

  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>

  <SignIn 
  signUpUrl="/register"
  redirectUrl={"/"}
  />
  
  </div>
  );
}
