import React from "react";
const UIBox = ({ task }) => {
  
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>sr.no.</th>
                        <th>status</th>
                        <th>action</th>
                    </tr>
            </thead>
                <tbody>
                    {task.map((e, i) => {
                        return <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td>{e.status}</td>
                            <td><button hidden={e.id?false:true}>mark as complete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            
        </>
    )
}
export default UIBox;