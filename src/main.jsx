import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.jsx'
import LandingPage from './routes/LandingPage.jsx'
import LoginPage from './routes/LoginPage.jsx'
import CadastrarPage from './routes/CadastrarPage.jsx'
import RecuperacaoContaPage from './routes/RecuperacaoContaPage.jsx'
import NovaSenhaPage from './routes/NovaSenhaPage.jsx'
import ConfirmacaoEmailPage from './routes/ConfirmacaoEmailPage.jsx'
import HomePage from './routes/HomePage.jsx'
import AnotacoesPage from './routes/AnotacoesPage.jsx'
import ListasPage from './routes/ListasPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'cadastrar',
        element: <CadastrarPage />
      },
      {
        path: 'recuperacao-senha',
        element: <RecuperacaoContaPage />
      },
      {
        path: 'confirmacao-email',
        element: <ConfirmacaoEmailPage />
      },
      {
        path: 'nova-senha',
        element: <NovaSenhaPage />
      },
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'anotacoes',
        element: <AnotacoesPage />
      },
      {
        path: 'listas',
        element: <ListasPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
