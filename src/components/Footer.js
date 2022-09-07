import React from 'react';
import { CDBFooter, CDBBox, CDBBtn, CDBIcon, } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src="https://tienda.antel.com.uy/razuna/assets/1/C1E491498DD84E71960E4EE38E691C34/img/C7133CA320484B3B9AE5F788FC196A12/antel-fondoazul.png"
              width="120px"
              id="logo"
            />
          </a>
          <small className="ml-2">&copy; Antel, 2022. Montevideo, Uruguay.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};