import React from "react";
export const CardComponent = ({listaUtenti}) => {
    return(
        <table>
            <thead>
                <tr>
                    <td>-</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>WebSite</td>
                </tr>
            </thead>
            <tbody>
                {listaUtenti.map(u => 
                    <tr>
                        <td>-</td>
                        <td>{u.name}</td>
                        <td>{u.username}</td>
                        <td>{u.email}</td>
                        <td>{u.phone}</td>
                        <td>{u.website}</td>
                    </tr>  
                )}
            </tbody>
        
        </table>
    )
}
export default CardComponent;