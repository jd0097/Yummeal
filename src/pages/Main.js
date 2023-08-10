import React, { useEffect, useState } from "react";
import Slick from "../components/Slick";
import { MainDiv } from "../style/MainCss";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { getBestProduct } from "../api/mainFatch";

const Main = () => {
  const [bestProduct, setBestProduct] = useState([]);
  // uri 에서 값 읽기
  const { pid } = useParams();

  //제일 많이 팔린 상품 가져오기
  const getBestProductFetch = async () => {
    try {
      const productIdJson = await getBestProduct(pid);
      setBestProduct(productIdJson);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBestProductFetch();
  }, [pid]);

  const navigate = useNavigate();

  const handleMoveViewClick = _more_view => {
    navigate(`/productlist`);
  };
  const handleShoppingClick = () => {
    navigate(`/cart`);
  };
  const handleItemClick = _id => {
    navigate(`/product/${_id}`);
  };

  return (
    <MainDiv>
      <div className="wrap">
        <div className="info">
          <Slick />
          <div className=" best-item">
            <h1 className="best-title">요즘, 많이 찾는 상품</h1>
            <button
              type="button"
              className="confirm"
              onClick={() => handleMoveViewClick()}
            >
              더보기
            </button>
          </div>
          <ul className="list-area">
            {bestProduct.map((item, index) => (
              <div key={index}>
                <li className="product-card">
                  <img
                    src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                    alt="상품 이미지"
                    className="product-image"
                  />
                  <span className="product-description">
                    <span
                      className="item-numbering"
                      onClick={() => handleItemClick(item.productId)}
                    />
                 
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopping-icon"
                      onClick={() => handleShoppingClick()}
                    />
                  </span>
                  <div className="item-info">
                    <h2>{item.name}</h2>
                    <p>가격 :{item.price.toLocaleString()}원</p>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </MainDiv>
  );
};

export default Main;
