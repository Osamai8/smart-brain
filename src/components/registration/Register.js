import React, { useState } from 'react';

const Register = ({ onRouteChange, loadUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onNameChange = (e) => {
        setName(e.target.value);
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const onSubmitRegister = () => {
        fetch('https://green-pumpkin.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    loadUser(data);
                    onRouteChange('home');
                }
            })
    }

    return (
        <article className="br2 ba b--black-10 mv4 w-80 w-50-m w-33-l mw6 shadow-3 center ">
            <main className="pa4 black-80">
                <form className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">User Name</label>
                            <input
                                onChange={onNameChange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="text"
                                name="name"
                                id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                onChange={onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                onChange={onPasswordChange}
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="button"
                            value="Register"
                            onClick={onSubmitRegister} />
                    </div>
                </form>
            </main>
        </article>
    )
}

export default Register;