import { Link, Navigate, useNavigate } from "react-router-dom";
import React from "react";
import { DatePicker, Select, Space } from "antd";
import { useState } from "react";
import makeAnimated from "react-select/animated";
import { ModalDim, PlusChildModalCss } from "../style/ModalCss";
import { useEffect } from "react";

const PlusChildModal = ({ setShowModal }) => {
  const navigate = useNavigate();
  const [childBirth, setChildBirth] = useState();
  const [isChildBirth, setIsChildBirth] = useState();
  const [tasteValue, setTasteValue] = useState("");
  const [selectAllergy, setSelectAllergy] = useState([]);

  const allergyArr = [
    { value: 1, label: "난류" },
    { value: 2, label: "우유" },
    { value: 3, label: "메밀" },
    { value: 4, label: "땅콩" },
    { value: 5, label: "대두" },
    { value: 6, label: "밀" },
    { value: 7, label: "잣" },
    { value: 8, label: "호두" },
    { value: 9, label: "게" },
    { value: 10, label: "새우" },
    { value: 11, label: "오징어" },
    { value: 12, label: "고등어" },
    { value: 13, label: "조개류" },
    { value: 14, label: "복숭아" },
    { value: 15, label: "토마토" },
    { value: 16, label: "닭고기" },
    { value: 17, label: "돼지고기" },
    { value: 18, label: "소고기" },
    { value: 19, label: "아황산류" },
    { value: 20, label: "생선류" },
  ];

  const handleTaste = e => {
    setTasteValue(e.target.value);
  };

  const onChildBirthChange = (value, dateString) => {
    setChildBirth(dateString);
    if (dateString) {
      setIsChildBirth(true);
    } else if (!dateString) {
      setIsChildBirth(false);
    }
  };
  const handleAllergy = allergyArr => {
    setSelectAllergy(allergyArr);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleChildPlus = () => {
    // 추후 post 진행
    setShowModal(false);
    // navigate(`/login`);
  };
  const handleSkip = () => {
    setShowModal(false);
    // navigate("/login");
  };
  const animatedComponents = makeAnimated();
  return (
    <>
      <ModalDim />
      <PlusChildModalCss>
        <div className="login-modal">
          {/* <FontAwesomeIcon
          icon={faXmark}
          className="close-icon"
          onClick={() => setLoginShowModal(false)}
        /> */}
          <img
            className="modal-img"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
          />
          <div className="modal-content">
            <h4>
              우리 아이 취향에 딱 맞는 이유식 !
              <br />
              <br />
              <h5>아이의 취향을 알려주세요 :)</h5>
              <br />
              <span>아이가 언제 태어났나요?</span>
              <Space direction="vertical">
                <DatePicker
                  onChange={onChildBirthChange}
                  placeholder="YYYY-MM-DD"
                  style={{
                    height: "30px",
                  }}
                />
              </Space>
              <br />
              <div className="search-wrap">
                <span>아이가 가지고 있는 알레르기가 있다면?</span>
                <div className="search-form">
                  <Select
                    className="allergy"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    onChange={allergyArr => handleAllergy(allergyArr)}
                    value={selectAllergy}
                    isMulti
                    options={allergyArr}
                    placeholder="꼭 선택하지 않아도 돼요 :)"
                    isSearchable={false}
                  />
                </div>
              </div>
              <span>아이가 좋아하거나 싫어하는 건 뭔가요?</span>
              <input
                className="child-box"
                type="text"
                name="value"
                placeholder="없다면 쓰지 않아도 돼요:)"
                value={tasteValue}
                onChange={handleTaste}
              />
              <br />
            </h4>

            <div className="modal-buttons">
              <button onClick={handleChildPlus}>추가하기</button>
              {/* <input type="button" value="시작하기" /> */}
              <button onClick={handleSkip}>건너뛰기</button>
              {/* <input type="button" value="건너뛰기" /> */}
              {/* <input
              type="button"
              value="건너뛰기"
              onClick={() => setLoginShowModal(!loginShowModal)}
            /> */}
            </div>
          </div>
        </div>
      </PlusChildModalCss>
    </>
  );
};

export default PlusChildModal;
