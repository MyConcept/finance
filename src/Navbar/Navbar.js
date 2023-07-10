import React from "react";
import logoFinance from "../logo.png";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logoFinance} alt="Bootstrap" width="50" height="50"/>
                    finance
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tableau de bord</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Agents</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Raport</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}