import React from "react";
import {useSession} from "@clerk/clerk-react";
import { checkUserRole } from "../../utils/clerkUser";
import NotFoundPage from "../NotFoundPage";

const Roster = () => {

  const { session } = useSession();
  const userRole = checkUserRole(session);

  return (userRole!=="org:admin")
  ?(<>
  <NotFoundPage />
  </>
  )
  :(
  <div>Roster</div>
  );
};

export default Roster;
