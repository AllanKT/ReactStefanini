import styled, { css } from "styled-components";

import { Email, VpnKey } from '../../styles/icons';

export const Back = styled.div`
  background-image: url(${props => props.image}) !important;
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased !important;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  height: 90vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    padding: 50px;
    background: var(--white);
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content img {
    top: 413px;
    left: 506px;
    width: 256px;
    height: 255px;
    padding: 20px;
    border-right: 1px solid gray;
  }

  .content section {
    width: 100%;
    max-width: 380px;
  }

  .content form {
    width: 100%;
    max-width: 450px;
  }

  .content form input {
    margin-top: 8px;
  }

  .input-container {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }
`;

const iconCss = css`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: 20px;
    min-width: 50px;
    color: var(--gray);
    position: absolute;
`;

export const EmailIcon = styled(Email)`${iconCss}`;
export const PasswordIcon = styled(VpnKey)`${iconCss}`;
