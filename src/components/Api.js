import React, { useState } from 'react';

const API_URL = "http://localhost:8000/"

function ApiItem({ name, desc, marginClass="" }) {
    return (
        <div className={`api__item ${marginClass && "api__item__margin"}`}>
            <span>{ name }</span>
            <span dangerouslySetInnerHTML={{__html: desc}}></span>
        </div>
    )
}

function Api({ children, method, desc, url, real_url, button, apiObj="" }) {
    const [ apiData, setApiData ] = useState(apiObj);
    const [ apiResponse, setApiResponse ] = useState();
    const api_url = real_url ? real_url : url

    function fetchApiData() {
        const api_full_url = API_URL + api_url;
        fetch(api_full_url, { method: method })
            .then(res => { 
                setApiResponse(res.status);
                return res.json();
            })
            .then(data => setApiData(
                apiObj ?
                {
                    "count": data["count"],
                    "next": data["next"],
                    "previous": data["previous"],
                    "results": data["results"][0]
                } :
                data
            ))
            .catch(e => console.log(e))
    }

    return (
        <section className="api">
            <div className="section_header">
                <p><strong className="clr-accent">{ method }</strong> { desc }</p>
                <pre>{ window.location.href }{ url }</pre>
            </div>
            <div className="section_params">
                { children }
            </div>
            <div className="section_response">
                <p className="response__header">
                    <span>{ apiResponse && `Response ${apiResponse}`}</span>
                    <span><button onClick={ fetchApiData }>{ button }</button></span>
                </p>
                <pre className="api__pre">
                    { apiData && JSON.stringify(apiData, null, 2) }
                </pre>                
            </div>
        </section>
    )
}

export { Api, ApiItem }
