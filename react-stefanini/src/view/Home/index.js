import React from "react";

import Button from '../../component/Button';

import { Back, Container, EmailIcon, PasswordIcon } from "./styles";

import logo from "../../assets/image/logo.png";
import back from "../../assets/image/back.png";

function Home() {
  return (
      <Back image={back}>
          <Container>
            <div className="content">
                <section>
                    <img src={logo} alt="logo" />
                </section>
                <form>
                    <div class="input-container">
                        <EmailIcon />
                        <input
                            id="user"
                            type="text"
                            name="user"
                            placeholder="Digite seu e-mail"
                            // onChange={onChange}
                            // value={values.user}
                        />
                    </div>
                    <div class="input-container">
                        <PasswordIcon />
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Digite sua senha"
                            // onChange={onChange}
                            // value={values.password}
                        />
                    </div>
                    <Button name="Login"/>
                </form>
            </div>
        </Container>
      </Back>
  );
}

export default Home;
