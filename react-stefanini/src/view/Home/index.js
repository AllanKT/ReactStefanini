import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';

import StoreContext from '../../component/Store/Context';
import Button from '../../component/Button';

import { Back, Container, EmailIcon, PasswordIcon } from "./styles";

import logo from "../../assets/image/logo.png";
import back from "../../assets/image/back.png";


function initialState() {
    return { user: '', password: '' };
}

function login({ user, password }) {
    if (user === 'admin' && password === 'admin'){
        return { token: '1234' };
    }
    return { error: 'Usuário ou senha invalido' };
}

function Home() {
    const [values, setValues] = useState(initialState);
    const { setToken } = useContext(StoreContext);
    const history = useHistory();

    function onChange(event) {
        const { value, name } = event.target;
        console.log(value);
        setValues({
            ...values,
            [name]: value,
        });
    }

    function onSubmit(event) {
        event.preventDefault();
        const { token } = login(values);
        console.log(token)
        if (token) {
            setToken(token);
            return history.push('/list');
        }
        setValues(initialState);
    }

  return (
      <Back image={back}>
          <Container>
            <div className="content">
                <section>
                    <img src={logo} alt="logo" />
                </section>
                <form onSubmit={onSubmit}>
                    <div class="input-container">
                        <EmailIcon />
                        <input
                            id="user"
                            type="text"
                            name="user"
                            placeholder="Digite seu e-mail"
                            onChange={onChange}
                            value={values.user}
                        />
                    </div>
                    <div class="input-container">
                        <PasswordIcon />
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Digite sua senha"
                            onChange={onChange}
                            value={values.password}
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
