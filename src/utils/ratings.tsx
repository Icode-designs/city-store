import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function numberToStars(
  rating?: { 5: number; 4: number; 3: number; 2: number; 1: number },
  maxStars = 5
) {
  const safeRating = rating ?? { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  const totalRatings = Object.values(safeRating).reduce(
    (sum, val) => sum + val,
    0
  );
  const weightedSum = Object.entries(safeRating).reduce(
    (sum, [key, value]) => sum + Number(key) * value,
    0
  );

  const aveRating = totalRatings === 0 ? 0 : weightedSum / totalRatings;

  const stars = [];
  const fullStars = Math.floor(aveRating);
  const hasHalfStar = aveRating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++)
    stars.push(<FaStar key={`full-${i}`} color="#FFD700" />);
  if (hasHalfStar) stars.push(<FaStarHalfAlt key="half" color="#FFD700" />);
  for (let i = stars.length; i < maxStars; i++)
    stars.push(<FaRegStar key={`empty-${i}`} color="#FFD700" />);

  return stars;
}

function sumRatings(rating: {
  5: number;
  4: number;
  3: number;
  2: number;
  1: number;
}): number {
  return Object.values(rating).reduce((sum, val) => sum + val, 0);
}

export { numberToStars, sumRatings };
