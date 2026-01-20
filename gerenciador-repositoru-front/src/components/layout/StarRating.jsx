import { useState } from "react";
import "./StarRating.module.css";

function StarRating({ value = 0, onChange }) {
    const [rating, setRating] = useState(value);

    const handleChange = (newValue) => {
        setRating(newValue);
        if (onChange) onChange(newValue);
    };

    return (
        <div className="rating">
            {[5, 4, 3, 2, 1].map((star) => (
                <span key={star}>
                    <input
                        type="radio"
                        id={`star${star}`}
                        name="rating"
                        value={star}
                        checked={rating === star}
                        onChange={() => handleChange(star)}
                    />
                    <label htmlFor={`star${star}`}>★</label>
                </span>
            ))}
        </div>
    );
}

export default StarRating;
