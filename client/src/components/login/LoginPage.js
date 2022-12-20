import {useState} from 'react';
import './LoginPage.css';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => { // handle login button click
        event.preventDefault(); // keep here to prevent page reload
        console.log('username: ' + username);
        console.log('password: ' + password);
        // auth stuff here
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("username", username);
        urlencoded.append("password", password);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://" + window.location.hostname + ":8080/auth/login", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

//
    }

    return (
        <div className={"mx-auto px-5 bg-gradient text-center min-h-screen pt-10"}>
            <span className={"drop-shadow font-bold text-6xl block text-white"}>FencePOS</span>
            <span className={"drop-shadow font-bold text-lg text-white"}>Please log in to use the application.</span>
                <form onSubmit={handleSubmit}>
                    <div className={"loginBox mx-auto mt-10 shadow text-start p-5"}>
                        <div className={"form-group"}>
                            <label htmlFor={"username"} className={"text-white block"}>Username</label>
                            <input type={"text"} id={"username"} name={"username"} className={"form-control rounded w-full"} placeholder={"Username"} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"password"} className={"text-white block"}>Password</label>
                            <input type={"password"} id={"password"} name={"password"} className={"form-control rounded w-full"} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <input type={"submit"} value={"Login"} className={"btn btn-gradient-reversed mt-5 shadow"} />
                </form>
            <a href={"#forgotpass"} className={"text-white mt-5 block"}>Forgot password?</a>
        </div>
    );
}

export default LoginPage;