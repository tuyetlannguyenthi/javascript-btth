import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./layoutStyle.css";
import Logo from "./assets/images/logo3.jpg";
import QA from "./assets/images/1.jpg";
import ATT from "./assets/images/2.jpg";
import AKTD from "./assets/images/3.jpg";
import CL from "./assets/images/4.jpg";
import QA2 from "./assets/images/1.jpg";
import ATT2 from "./assets/images/2.jpg";
import AKTD2 from "./assets/images/3.jpg";
import CL2 from "./assets/images/4.jpg";
import { FaShoppingCart, FaSearch, FaPhone } from "react-icons/fa";
import { Fa1, Fa2, Fa3, Fa4 } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaVoicemail, FaInstagram, FaMap } from "react-icons/fa";
import { BiFontSize } from "react-icons/bi";

function App() {
  const hoten = "Nguyễn Thị Tuyết Lan";
  return (
    <>
      <header className="bg-red">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src={Logo} />
            </div>
            <div className="col-md-8">
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    Trang chủ
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          Giới thiệu
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Sản phẩm
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              QA1
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              QA2
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              QA3
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              QA4
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Và còn nhiều hơn thế nữa
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Tin tức
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Liên hệ
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">
                          Không thể truy cập
                        </a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button class="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-md-2 mt-3">
              <FaSearch className="mx-2" style={{ fontSize: 50 }}/>
              <FaPhone className="mx-2" style={{ fontSize: 50 }}/>
              <FaShoppingCart style={{ fontSize: 50 }}/>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={QA} class="d-block w-100 h-50" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={AKTD} class="d-block w-100 h-50" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={CL} class="d-block w-100 h-50" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={AKTD} class="d-block w-100 h-50" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div align="center" className="bg-success text-white p-3">DANH MỤC CÁC SẢN PHẨM </div>
        <div class="product-category mt-3" className="bg-success text-white p-3">
          <div class="row">
            <div class="col-md-3" >
              <div class="category-title bg-main">
                <div class="sd pb-1"><img class="img-fluid d-none d-md-block " src={QA2} alt="QA"></img></div>
                <h2 class="mt-3">QA</h2>
                <dl class="dl-horizontal">
                  <dt>Giá: 10000Đ</dt>
                  <dt>Tình trạng: Còn hàng</dt>
                  <dt>Hãng sản xuất: Mỹ</dt>
                </dl>{" "}
                <a
                  href="https://www.QA-cola.com/vn/vi"
                  class="btn btn-primary"
                  title="Chi tiết"
                >
                  Chi tiết cụ thể »
                </a>
              </div>
            </div>
            <div class="col-md-3" >
              <div class="category-title bg-main">
                <div class="sd pb-1"><img class="img-fluid d-none d-md-block " src={AKTD2} alt="QA"></img></div>
                <h2 class="mt-3">AKTD</h2>
                <dl class="dl-horizontal">
                  <dt>Giá: 10000Đ</dt>
                  <dt>Tình trạng: Còn hàng</dt>
                  <dt>Hãng sản xuất: Mỹ</dt>
                </dl>{" "}
                <a
                  href="https://AKTDshop.vn/"
                  class="btn btn-primary"
                  title="Chi tiết"
                >
                  Chi tiết cụ thể »
                </a>
              </div>
            </div>
            <div class="col-md-3" >
              <div class="category-title bg-main">
                <div class="sd pb-1"><img class="img-fluid d-none d-md-block " src={CL2} alt="QA"></img></div>
                <h2 class="mt-3">CL</h2>
                <dl class="dl-horizontal">
                  <dt>Giá: 10000Đ</dt>
                  <dt>Tình trạng: Còn hàng</dt>
                  <dt>Hãng sản xuất: Nhật</dt>
                </dl>{" "}
                <a
                  href="https://www.7up.com/en"
                  class="btn btn-primary"
                  title="Chi tiết"
                >
                  Chi tiết cụ thể »
                </a>
              </div>
            </div>
            <div class="col-md-3" >
              <div class="category-title bg-main">
                <div class="sd pb-1"><img class="img-fluid d-none d-md-block " src={AKTD2} alt="QA"></img></div>
                <h2 class="mt-3">CL</h2>
                <dl class="dl-horizontal">
                  <dt>Giá: 5000Đ</dt>
                  <dt>Tình trạng: Còn hàng</dt>
                  <dt>Hãng sản xuất: Việt Nam</dt>
                </dl>{" "}
                <a
                  href="https://AKTDfinavietnam.com/"
                  class="btn btn-primary"
                  title="Chi tiết"
                >
                  Chi tiết cụ thể »
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-dark text-white p-3">
        <section class="hdl-footer pb-4">
          <div class="container">
            <div class="row">
              <div class="col-md-4 pt-4">
                <h3 class="widgettilte">Cửa hàng Miss Lan LLL</h3>
                <p class="pt-1">
                  Địa chỉ: TP Biên Hòa, Đồng Nai
                  <div class="google-icon">
                    <FaMap />
                    <a
                      href="https://www.google.com/maps/place/%C4%90.+S%E1%BB%91+4,+Linh+Xu%C3%A2n,+Th%E1%BB%A7+%C4%90%E1%BB%A9c,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8742799,106.7683018,17z/data=!3m1!4b1!4m6!3m5!1s0x3174d87f0d0cc2ed:0x5a9cf3d58230282d!8m2!3d10.8742799!4d106.7683018!16s%2Fg%2F1tglkd5s?entry=ttu"
                      class="btn btn-primary"
                      title="Chi tiết cụ thể"
                    >
                      Địa chỉ »
                    </a>
                  </div>
                </p>
                <p class="pt-1">
                  Điện thoại: 0522938393(call, zalo) - Email: tuyetlannguyenthi.work@gmail.com
                </p>
                <h3 class="widgettilte">MẠNG XÃ HỘI</h3>
                <div class="social my-3">
                  <div class="facebook-icon">
                    <FaFacebook />
                    <a
                      href="https://www.facebook.com/profile.php?id=100018269581705"
                      class="btn btn-primary"
                      title="Chi tiết cụ thể"
                    >
                      Facebook »
                    </a>
                  </div>
                  <div class="instagram-icon">
                    <FaInstagram />
                    <a
                      href="#"
                      class="btn btn-primary"
                      title="Chi tiết cụ thể"
                    >
                      instagram »
                    </a>
                  </div>
                  <div class="google-icon">
                    <FaVoicemail />
                    <a
                      href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                      class="btn btn-primary"
                      title="Chi tiết cụ thể"
                    >
                      Email »
                    </a>
                  </div>
                  <div class="youtube-icon">
                    <FaYoutube />
                    <a
                      href="https://www.youtube.com/channel/UCPsCRfPVDUIV1s9EJaN4bxQ"
                      class="btn btn-primary"
                      title="Chi tiết cụ thể"
                    >
                      Youtube »
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-5 pt-4">
                <h3 class="widgettilte">
                  <strong>Thông tin thêm</strong>
                </h3>
                <div className="col-md-2">
                <div class="social my-3">
                  <div> <Fa1/>
                    <a
                      href="https://vi.wikipedia.org/wiki/AKTD"
                      class="btn btn-primary"
                      title="Chi tiết cụ thể"
                    >
                      AKTD »
                    </a></div>
                  <div><Fa2/>
                    <a
                      href="https://vi.wikipedia.org/wiki/QA-Cola"
                      class="btn btn-primary"
                      title="Chi tiết cụ thể"
                    >
                      QA »
                    </a></div>
                  <div> <Fa3/>
                    <a
                      href="https://vi.wikipedia.org/wiki/7_Up"
                      class="btn btn-primary"
                      title="Chi tiết cụ thể"
                    >
                      CL »
                    </a></div>
                  <div><Fa4/>
                    <a
                      href="https://en.wikipedia.org/wiki/AKTDfina"
                      class="btn btn-primary"
                      title="Chi tiết cụ thể"
                    >
                      AKTDfina »
                    </a></div>
                    </div>
                </div>
              </div>
              <div class="col-md-3 pt-4 text-end">
                <h3 class="fs-5 text-end">
                  <strong>Lượt truy cập</strong>
                </h3>
                <p class="my-1">??? lượt</p>
              </div>
            </div>
          </div>
        </section>
        <section class="dhl-copyright bg-dark py-3">
          <div class="container text-center text-white">
            Thiết kế bởi: Nguyễn Thị Tuyết Lan - Phone: 0522938393
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
