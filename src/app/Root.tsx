import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Header } from 'common/header';
import { Footer } from 'common/footer';

export const Root: FC = () => (
    <React.StrictMode>
        <Header />
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <Footer />
    </React.StrictMode>
)