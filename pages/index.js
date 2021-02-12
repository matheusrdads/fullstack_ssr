import React, { useEffect, useState } from "react"
import "isomorphic-fetch"
import Link from "next/link"




export default function Products() {

    const [produtos, setProdutos] = useState([]);
    const [categoria, setCategoria] = useState([]);

    function getProdutos() {
        async function showProdutos() {
            const url = "http://localhost:5001/products";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setProdutos(resultado);
        }
        showProdutos();
    }

    useEffect(() => { getProdutos() }, []);

    useEffect(() => { }, [produtos]);

    function selectCategoria(e) {
        setCategoria("");
        setCategoria(e.target.value)
        return (console.log(categoria))
    }


    return (
        <div className="container-fluid">

            <h3 className="text-white">Products</h3>

            <Link href="/sobre">Sobre</Link>

            <div className="row text-white">

                <div className="col-sm-2">
                    <h3 >Categories</h3>
                    <ul className="list-group">
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value="">All(12)</button>
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value="heavymetal">Heavy Metal(3)</button>
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value="blackmetal">Black Metal(1)</button>
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value="thrashmetal">Thrash Metal(4) </button>
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value="progressivemetal">Progressive Rock(1) </button>
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value="folkmetal">Folk Metal (1)</button>
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value="hardrock">Hard Rock (2)</button>
                    </ul>

                </div>

                <div className="col-sm-10">

                    <div className="products_c">
                        {produtos && produtos.map(row => {

                            if (categoria === row.categories) {
                                return (
                                    <div className="box_products text-dark pro" id={row.categories} >
                                        <p className="descripton text-dark paragrafo">{row.descripton}</p>
                                        <p className="text-danger paragrafo">${row.price} </p>
                                        <p className="price text-dark paragrafo">${row.finalprice}</p>

                                    </div>)

                            } else if (categoria == 0) {
                                return (
                                    <div className="box_products text-dark pro" id={row.categories} >
                                        <p className="descripton text-dark paragrafo">{row.descripton}</p>
                                        <p className="text-danger paragrafo">${row.price} </p>
                                        <p className="price text-dark paragrafo">${row.finalprice}</p>

                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

}








// import React from "react";
// import { useState, useEffect } from "react";

// export default function Products() {

//     const [produtos, setProdutos] = useState([]);
//     const [categoria, setCategoria] = useState([]);

//     function getProdutos() {
//         async function showProdutos() {
//             const url = "http://localhost:5001/products";
//             const resposta = await fetch(url);
//             const resultado = await resposta.json();
//             setProdutos(resultado);
//         }
//         showProdutos();
//     }

//     useEffect(() => { getProdutos() }, []);

//     useEffect(() => { }, [produtos]);

//     function selectCategoria(e) {
//         setCategoria("");
//         setCategoria(e.target.value)
//         return (console.log(categoria))
//     }

//     return (

// }