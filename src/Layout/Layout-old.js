import React from "react";

export default function Layout() {
    return (
        <>
            <h2 class="bg-dark text-white text-rigth border-top borber-1 border-white mp-2 text-center">Tableau de bord</h2>
            <div class="container">
                <ul class="nav nav-tabs mb-2" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Biens</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Métrique au m3 global</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Métrique détaillé</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>BTP</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <p>
                            <button class="btn btn btn-outline-success me-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Les biens
                            </button>
                            <button class="btn btn btn-outline-success me-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                                Les notaires
                            </button>
                            <button class="btn btn btn-outline-success me-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                Les géometres
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Titre notarié + Géomètre</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">les biens</li>
                                    </ol>
                                </nav>
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
                                            <td><button type="button" class="btn btn-outline-info p-1 m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Titre Foncier</i></button><button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Plan du site</i></button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>N0013</td>
                                            <td> <a class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#">bien Jacob</a></td>
                                            <td>Thornton</td>
                                            <td> localisé à fat</td>
                                            <td>Non-Gagé<span class="badge text-bg-warning m-2">Aucun</span></td>
                                            <td><button type="button" class="btn btn-outline-info p-1 m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Titre Foncier</i></button><button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Plan du site</i></button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>N0014</td>
                                            <td> <a class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#">bien Larry</a></td>
                                            <td>the Bird</td>
                                            <td> localisé à twitter</td>
                                            <td>Gagé<span class="badge text-bg-info m-2">BIM</span></td>
                                            <td><button type="button" class="btn btn-outline-info p-1 m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Titre Foncier</i></button><button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Plan du site</i></button></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="collapse" id="collapseExample1">
                            <div class="card card-body">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Titre notarié + Géomètre</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">les notaires</li>
                                    </ol>
                                </nav>
                                <table class="table caption-top">
                                    <caption>listes des notaires</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nom et Prenom</th>
                                            <th scope="col">Qualité</th>
                                            <th scope="col">Autorité Administrative</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td><button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td><button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td><button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="collapse" id="collapseExample2">
                            <div class="card card-body">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Titre notarié + Géomètre</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">les géomètres</li>
                                    </ol>
                                </nav>
                                <table class="table caption-top">
                                    <caption>listes des géomètres</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nom et Prenom</th>
                                            <th scope="col">Qualité</th>
                                            <th scope="col">Autorité Administrative</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td><button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td><button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td><button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                    </div>
                    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                    </div>
                    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                    </div>
                </div>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">information sur....</h1>
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