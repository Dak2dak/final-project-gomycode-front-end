import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleCard = () => {
  return (
    <div className="singleCart">
      <div className="card">
        <img src={require('../images/picture1.jpg')} className="card-img-top" alt="Oups!" />
        <div className="card-body">

          <span>Description</span>
          
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            illum, vitae voluptatum aspernatur totam repellendus ipsum nemo
            nostrum officia pariatur, cupiditate aperiam labore? Neque, sequi
            odit amet hic corporis culpa nobis earum repellendus delectus
            perspiciatis non maiores exercitationem corrupti ratione facere
            praesentium vero. Architecto vel optio voluptatem magni consectetur
            at vero consequuntur, nostrum ipsa nihil iure, labore numquam harum
            neque fugit, quas dicta repudiandae voluptate a nesciunt perferendis
            itaque? Ducimus incidunt tenetur vel rem cupiditate perspiciatis
            corrupti illum culpa quod ad deserunt, voluptate eaque facere eum
            dicta sed in ex temporibus! Minus illum quidem ea ratione voluptatem
            libero veritatis incidunt?
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;