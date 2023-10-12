// ParallaxImage.jsx
import { Parallax } from "react-parallax";

const ParallaxImage = () => {
  return (
    <Parallax
  bgImage="https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2x "
  strength={400}
  style={{ height: "70vh" }}
  y={[10, -100]}
>
  <div className="parallax">
    <h1 hidden>HABITAT || Propiedad raíz, Compra,Venta</h1>
  </div>
</Parallax>
  );
};

export default ParallaxImage;
