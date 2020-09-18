import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { sideBarItemList } from "@/AdminViews/CompanyContainter/SideBarItemList";
import { AppContainer } from "@/GlobalComponents";
import { CompanyDetails } from "@/AdminViews/CompanyContainter";
import { accountService } from "@/_services";
import { Role } from "@/_helpers";
import { fetchCompanies } from "@/redux/actions/actions";
import { NotAvailablePage } from "@/AdminViews/common/Pages";

function CompanyContainer({ companies }) {
  const [user, setUser] = useState({});
  //middleware or something will getch the list of companies
  useEffect(async () => {
    fetchCompanies(dispatch);
  }, []);

  useEffect(() => {
    const subscription = accountService.user.subscribe(x => setUser(x));
    return subscription.unsubscribe;
  }, []);

  // only show nav when logged in
  // user is an object with permissions
  if (!user) return null;
  return (
    <AppContainer sideBarItemList={sideBarItemList} permissions={user.role}>
      {user.role === Role.Admin && <CompanyDetails companies={companies} />}
      {user.role === Role.User && <NotAvailablePage />}
    </AppContainer>
  );
}

const mapStateToProps = ({ adminStates, dispatch }) => {
  return { companies: adminStates.companies, dispatch };
};
const mapDispatchToProps = dispatch => {
  return { ...fetchCompanies(dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer);
