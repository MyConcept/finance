import React from "react";

export default function Layout() {
    return (
        <>
            <h2 class="bg-dark text-white text-rigth border-top borber-1 border-white mp-2 text-center">Tableau de bord</h2>
            <div class="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Tableau de bord</a></li>
                        <li class="breadcrumb-item active" aria-current="page">les biens</li>
                    </ol>
                </nav>
                <div class="card card-body">
                    <table class="table caption-top text-center">
                        <caption>listes des Biens</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Numéro</th>
                                <th scope="col">Nom </th>
                                <th scope="col">Titulaire</th>
                                <th scope="col">Localisation</th>
                                <th scope="col">Etat</th>
                                <th scope="col">Document</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>N0012</td>
                                <td> <a class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#">bien Mark</a></td>
                                <td>Otto</td>
                                <td> localisé à mdo</td>
                                <td>Gagé<span class="badge text-bg-info m-2">BMS</span></td>
                                <td><button type="button" class="btn btn-outline-info p-1 m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Titre Foncier</i></button><button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1"> <i class="bi bi-eye-fill">Plan du site</i></button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>N0013</td>
                                <td> <a class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#">bien Jacob</a></td>
                                <td>Thornton</td>
                                <td> localisé à fat</td>
                                <td>Non-Gagé<span class="badge text-bg-warning m-2">Aucun</span></td>
                                <td><button type="button" class="btn btn-outline-info p-1 m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Titre Foncier</i></button><button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1"> <i class="bi bi-eye-fill">Plan du site</i></button></td>
                            </tr>1
                            <tr>
                                <th scope="row">3</th>
                                <td>N0014</td>
                                <td> <a class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#">bien Larry</a></td>
                                <td>the Bird</td>
                                <td> localisé à twitter</td>
                                <td>Gagé<span class="badge text-bg-info m-2">BIM</span></td>
                                <td><button type="button" class="btn btn-outline-info p-1 m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Titre Foncier</i></button><button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1"> <i class="bi bi-eye-fill">Plan du site</i></button></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>N0015</td>
                                <td> <a class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#">bien arry</a></td>
                                <td>Bird</td>
                                <td> localisé à twit</td>
                                <td>Gagé<span class="badge text-bg-info m-2">BIM</span></td>
                                <td><button type="button" class="btn btn-outline-info p-1 m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Titre Foncier</i></button><button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1"> <i class="bi bi-eye-fill">Plan du site</i></button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>


                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Titre Foncier</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                les informations suplementaires et completes seront affichées ici<br />
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Plan du site</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                les informations suplementaires et completes seront affichées ici<br />
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}