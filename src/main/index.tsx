import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/presentation/pages/App'
import { makeLogin } from '@/main/factories/pages/login/login-factory'

ReactDOM.render(
    <App makeLogin={makeLogin}/>,
    document.getElementById('main')
)
