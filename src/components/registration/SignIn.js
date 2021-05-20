import React, { useState } from 'react';

const SignIn = ({ onRouteChange, loadUser }) => {
    const [signInEmail, setSignINEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const onEmailChange = (e) => {
        setSignINEmail(e.target.value);
    }
    const onPasswordChange = (e) => {
        setSignInPassword(e.target.value);
    }
    const onSubmitSignin = () => {
        fetch('https://green-pumpkin.herokuapp.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        })
            .then(res => res.json())
            .then(user => {
                if (user.id) {
                    loadUser(user)
                    onRouteChange('home');
                }
            })

    }
    return (
        <article className="br2 ba b--black-10 mv4 w-80 w-50-m w-35-l mw6 shadow-3 center pa4-l">
            <main className="pa4 black-80">
                <form className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                onChange={onEmailChange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="button" value="Sign in"
                            onClick={onSubmitSignin} />
                    </div>
                    <div className="lh-copy mt3">
                        <p
                            className="f6 link dim black db pointer"
                            onClick={() => onRouteChange('register')}
                        >Register</p>
                    </div>
                </form>
            </main>
        </article>
    )
}


export default SignIn;