import CardStyles from './styles/CardStyles';
import { setDate } from '../lib/helpers';

export default function Card({ details }) {
  return (
    <CardStyles>
      <div className="img">
        <img src={details.mainImage.asset.url} alt={details.title}></img>
      </div>
      <div className="txt">
        <h3 className="txt__title">{details.title}</h3>
        <p className="txt__date">{setDate(details.date)}</p>
        <p className="txt__description">{details.description}</p>
      </div>
    </CardStyles>
  );
}
