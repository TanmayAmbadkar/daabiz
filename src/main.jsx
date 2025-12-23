import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Old CSS removed in favor of modern.css
// import './assets/css/styles.css'
// import './assets/css/mdb.min.css'
// import './assets/css/master.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
