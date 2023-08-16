import axios from "axios";

//회원가입 post
export const postSignUp = async _Item => {
  try {
    const res = await axios.post("/sign-api/sign-up", _Item);
    const result = res.data;
    console.log("해언가입설ㅇ공");
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 아이디 중복확인 post
export const postIdCheck = async _email => {
  try {
    const res = await axios.post(`/sign-api/email?email=${_email}`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 닉네임 중복확인 post?????
export const postNickNameCheck = async _nickName => {
  try {
    const res = await axios.post(`/sign-api/nickname?nickname=${_nickName}`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 검색 결과 get
export const searchResult = async (_product, _page) => {
  try {
    const res = await axios.get(
      `/api/search?product=${_product}&page=${_page}&row=16`,
    );
    const result = res.data;
    console.log("검색결과 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 필터 정렬 get
export const filterSort = async _item => {
  try {
    const res = await axios.post("/api/search/filter", _item);
    const result = res.data;
    console.log("검색필터결과 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 카테고리 메뉴 get
export const menuCate = async () => {
  try {
    const res = await axios.get("/api/cate/all");
    const result = res.data;
    console.log("카테고리 메뉴 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 메뉴 클릭 시 품목 get
export const cateProdList = async (_page, cateId, subCateId) => {
  console.log("카테액시오스 순서 테스트", _page, cateId, subCateId);
  try {
    const res = await axios.get(
      `/api/cate/list?cateId=${cateId}&cateDetailId=${subCateId}&page=${_page}&row=16`,
    );
    const result = res.data;
    console.log("카테고리 가냐? : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 상세정보 바로구매 get
export const quickBuy = async (_productId, count) => {
  try {
    const res = await axios.get(
      `/api/buy/product?productId=${_productId}&count=${count}`,
    );
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};