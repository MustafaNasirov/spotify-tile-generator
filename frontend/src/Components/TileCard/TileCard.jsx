import { useState } from "react";
import Button from "../Button/Button";
import "./TileCard.scss";

const TileCard = ({tile, handleUpdate, handleDelete, titleRef, ratingRef, creatorRef}) => {

    const [edit, setEdit] = useState(false);

    const updateRecord = (id) => {
        setEdit(false);
        handleUpdate(id);
    }

    return (
        <>
            {
            edit ? 
            <tbody className="table-container__row">
                <tr key = {tile.id}>

                    <td className="table-container__row-item"> <input ref={titleRef} defaultValue={tile.title} type="text" /> </td>   
                    <td className="table-container__row-item"> <input ref={ratingRef} defaultValue={tile.rating} type="text" /></td>
                    <td className="table-container__row-item"> <input ref={creatorRef} defaultValue={tile.creator} type="text"/></td>

                    <td>
                        <Button name="Cancel" handleClick={() => setEdit(false)} isAltForm={true} />
                        <Button name="Update" handleClick={() => updateRecord(tile.id)} isAltForm={true} />
                    </td>
                </tr>
            </tbody>

            :

            <tbody className="table-container__item">
                <tr key = {tile.id}>

                    <td className="table-container__row-item"> {tile.title} </td>   
                    <td className="table-container__row-item"> {tile.rating} </td>
                    <td className="table-container__row-item"> {tile.createdBy} </td>

                    <td>
                        <Button name="Edit" handleClick={() => setEdit(true)} isAltForm={true} />
                        <Button name="Delete" handleClick={() => handleDelete(tile.id)} isAltForm={true} />
                    </td>
                </tr>
            </tbody>
            }
        </>
    );
}

export default TileCard;