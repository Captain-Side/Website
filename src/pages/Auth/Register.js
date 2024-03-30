import { SignUp } from "@clerk/clerk-react"
 
export default function SignUpPage() {
  return ( 
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Ensure the component takes up the full viewport height
      padding: '20px'
}}>
    
  <SignUp
  signInUrl="/login"
  redirectUrl={"/"}
  />

  </div>
  );
}
