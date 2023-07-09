import React from "react";

export default function Layout() {
    return (
        <>
            <h2 class="bg-dark text-white text-rigth border-top borber-1 border-white mp-2 text-center">Tableau de bord</h2>
            <div class="container">



                <ul class="nav nav-tabs mb-2" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Titre notarié + Géomètre</button>
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
                                <table class="table caption-top">
                                    <caption>listes des Biens</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nom </th>
                                            <th scope="col">Titulaire</th>
                                            <th scope="col">Localisation</th>
                                            <th scope="col">Etat</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td> bien Mark</td>
                                            <td>Otto</td>
                                            <td> localisé à mdo</td>
                                            <td>placé</td>
                                            <td><button  type="button" class="btn btn-outline-info"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> bien Jacob</td>
                                            <td>Thornton</td>
                                            <td> localisé à fat</td>
                                            <td>vendu</td>
                                            <td><button  type="button" class="btn btn-outline-info"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td> bien Larry</td>
                                            <td>the Bird</td>
                                            <td> localisé à twitter</td>
                                            <td>litigé</td>
                                            <td><button  type="button" class="btn btn-outline-info"> <i class="bi bi-eye-fill">Voir</i></button></td>
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
                                            <th scope="col">Autorité Administratif</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td><button  type="button" class="btn btn-outline-info"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td><button  type="button" class="btn btn-outline-info"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td><button  type="button" class="btn btn-outline-info"> <i class="bi bi-eye-fill">Voir</i></button></td>
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
                                            <th scope="col">Autorité Administratif</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td><button  type="button" class="btn btn-outline-info"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td><button  type="button" class="btn btn-outline-info"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td><button  type="button" class="btn btn-outline-info"> <i class="bi bi-eye-fill">Voir</i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
                </div>

            </div>
        </>
    );
}