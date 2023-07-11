import React from "react";
import logoFinance from "../logo.png";
export default function Footer() {
    return (
        <div clas="container-fluid ">
            <div class="bg-dark  border-top border-2 border-success  position-fixed bottom-0 start-0 w-100">
                <div class=" text-center    " > 
                    <img src={logoFinance} height={50} width={50}/> <span class="text-success">Plateforme Finance</span>
                </div>
            </div>
        </div>
    );
}