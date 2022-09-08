import Button from "../Button/Button";
import "./TileForm.scss";

const TileForm = ({handleSubmit, titleRef, ratingRef, creatorRef}) => {
    return(
        <form className="form-container" onSubmit={handleSubmit}>
            
            <label className="form__input-label">Track: </label>
            <input className="form__input" ref={titleRef} type="text" placeholder="Track Title" required/>
            <label className="form__input-label">Rating: </label>
            <input className="form__input" ref={ratingRef} type="text" placeholder="(?/10)" required/>
            <label className="form__input-label">Logged By: </label>
            <input className="form__input" ref={creatorRef} type="text" placeholder="User Name" required/>

            <Button name="Log Track" />
        </form>
    );
}

export default TileForm;