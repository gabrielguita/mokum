import React from 'react'
import ReactDOM from 'react-dom'
import {getRoutes} from 'config/routes'

ReactDOM.render(getRoutes(), document.getElementById('app'))