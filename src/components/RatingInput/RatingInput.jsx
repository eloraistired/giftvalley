import './rating.css';

export const RatingInput = ({ className, iconClass }) => {
  return (
    <div className={`rating pointer-events-auto ${className}`}>
      <input type="radio" name="rating" value="1" className={`mask mask-star-2 ${iconClass ? iconClass : 'bg-violet-600'}`} />
      <input type="radio" name="rating" value="2" className={`mask mask-star-2 ${iconClass ? iconClass : 'bg-violet-600'}`} />
      <input type="radio" name="rating" value="3" className={`mask mask-star-2 ${iconClass ? iconClass : 'bg-violet-600'}`} />
      <input type="radio" name="rating" value="4" className={`mask mask-star-2 ${iconClass ? iconClass : 'bg-violet-600'}`} />
      <input defaultChecked type="radio" name="rating" value="5" className={`mask mask-star-2 ${iconClass ? iconClass : 'bg-violet-600'}`} />
    </div>
  );
};
