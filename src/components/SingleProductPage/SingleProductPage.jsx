import SingleProductDetail from "../SingleProductDetail/SingleProductDetail";
import { useParams } from "react-router";

export default function SingleProductPage() {
  const { id } = useParams();

  return (
    <div className="SingleProductPage">
      <SingleProductDetail itemId={id} />
    </div>
  );
}
