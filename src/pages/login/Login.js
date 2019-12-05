import React from 'react'
import './login.css'

export default (props) => {
    return (
        <div class="wrapper">
            <div class="container">
                <h1>欢迎登录</h1>

                <form>
                    <input type="text" placeholder="用户名"></input>
                    <input type="password" placeholder="密码"></input>
                    <button type="submit" id="login-button">登录</button>
                </form>
            </div>

            <ul class="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}
