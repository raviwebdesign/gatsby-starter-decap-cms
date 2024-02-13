import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
      <head>
    <title>Vider Business Solutions</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="author" content="ThemeZaa" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,maximum-scale=1"
    />
    <meta
      name="description"
      content="LEARN-TRAIN-MANAGE-SUCCEED - join VIDER,  a technology-driven platform that revolutionizes business practices and ensures compliance with regulations, simplifying the process of doing business & professional practice."
    />
    <link rel="shortcut icon" href="images/vider-favicon.png" />
    <link rel="apple-touch-icon" href="images/vider-favicon.png" />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="images/vider-favicon.png"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="images/apple-touch-icon-114x114.png"
    />
    <!-- style sheets and font icons  -->
    <link rel="stylesheet" type="text/css" href="https://vider.netlify.app/css/font-icons.min.css" />
    <link rel="stylesheet" type="text/css" href="https://vider.netlify.app/css/theme-vendors.min.css" />
    <link rel="stylesheet" type="text/css" href="https://vider.netlify.app/css/style.css" />
    <link rel="stylesheet" href="https://vider.netlify.app/css/main.css" />
    <link rel="stylesheet" type="text/css" href="https://vider.netlify.app/css/responsive.css" />

    <style>
      .image-show {
        background-image: url("./images/aks1.png");
      }
      .mobile-hero-img {
        display: none;
        max-width: 100%;
      }
      .word-animation {
        font-size: 32px;
      }
      .what-special {
        color: white;
      }
      .what-special:hover {
        color: black;
      }
      @media (max-width: 767px) {
        .image-show {
          background-image: none;
        }
        .mobile-hero-img {
          display: block;
          max-width: 100%;
        }
        .word-animation {
          font-size: 18px;
        }
      }
    </style>
  </head>
 <header>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-transparent border-bottom border-color-black-transparent header-light fixed-top navbar-boxed header-reverse-scroll"
      >
        <div class="container-fluid nav-header-container">
          <div class="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <a class="navbar-brand" href="index.html">
              <img
                src="https://jss-vider-bucket.s3.ap-south-1.amazonaws.com/Vider%20Logo%20Beta.png"
                data-at2x="https://jss-vider-bucket.s3.ap-south-1.amazonaws.com/Vider%20Logo%20Beta.png"
                class="default-logo"
                alt=""
              />
              <img
                src="images/vider-2x.png"
                data-at2x="images/vider-2x.png"
                class="alt-logo"
                alt=""
              />
              <img
                src="https://jss-vider-bucket.s3.ap-south-1.amazonaws.com/Vider%20Logo%20Beta.png"
                data-at2x="https://jss-vider-bucket.s3.ap-south-1.amazonaws.com/Vider%20Logo%20Beta.png"
                class="mobile-logo"
                alt=""
              />
            </a>
          </div>
          <div class="col-auto col-lg-8 menu-order px-lg-0">
            <button
              class="navbar-toggler float-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-line"></span>
              <span class="navbar-toggler-line"></span>
              <span class="navbar-toggler-line"></span>
              <span class="navbar-toggler-line"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul class="navbar-nav alt-font">
                <li class="nav-item dropdown megamenu">
                  <a href="#" class="nav-link text-uppercase">Home</a>
                </li>
                <li class="nav-item dropdown simple-dropdown">
                  <a href="./aboutUs.html" class="nav-link text-uppercase"
                    >About Us</a
                  >
                </li>
                <li class="nav-item dropdown simple-dropdown">
                  <a
                    href="https://blog.vider.in/"
                    target="blank"
                    class="nav-link text-uppercase"
                    >Blogs</a
                  >
                </li>
                <li class="nav-item dropdown simple-dropdown">
                  <a href="#" class="nav-link text-uppercase">Products</a>
                  <i
                    class="fa fa-angle-down dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-hidden="true"
                  ></i>
                  <ul class="dropdown-menu" role="menu">
                    <li class="dropdown">
                      <a href="./atom.html" target="_blank">Atom </a>
                    </li>
                    <li class="dropdown">
                      <a href="./spectrum.html" target="_blank">Spectrum</a>
                    </li>
                    <li class="dropdown">
                      <a href="./prism.html" target="_blank">Prism </a>
                    </li>
                    <li class="dropdown">
                      <a href="./quantum.html" target="_blank">Quantum </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown simple-dropdown">
                  <a href="#" class="nav-link text-uppercase">Updates</a>
                </li>

                <li class="nav-item dropdown simple-dropdown">
                  <a href="#" class="nav-link text-uppercase">Utilities</a>
                  <i
                    class="fa fa-angle-down dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-hidden="true"
                  ></i>
                  <ul class="dropdown-menu" role="menu">
                    <li class="dropdown">
                      <a data-bs-toggle="dropdown" href="javascript:void(0);"
                        >Income Tax<i
                          class="fas fa-angle-right dropdown-toggle"
                        ></i
                      ></a>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            id="verifyPan"
                            href=""
                            data-href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/verifyYourPAN"
                            >Verify your PAN</a
                          >
                        </li>
                        <li>
                          <a
                            id="tanDetails"
                            href=""
                            data-href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/knowYourTAN"
                            >Know TAN Details</a
                          >
                        </li>
                        <li>
                          <a
                            id="linkAddhar"
                            href=""
                            data-href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar"
                            >Link Aadhaar</a
                          >
                        </li>
                        <li>
                          <a
                            id="linkAddharStatus"
                            href=""
                            data-href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status"
                            >Link Aadhaar Status</a
                          >
                        </li>
                        <li>
                          <a
                            id="instantEpan"
                            href=""
                            data-href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan"
                            >Instant E-PAN
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://incometaxindia.gov.in/pages/tools/tax-calculator.aspx"
                            target="_blank"
                            >Income Tax Calculator</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://tin.tin.nsdl.com/oltas/refund-status-pan.html"
                            target="_blank"
                            >Refund Status
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="dropdown">
                      <a data-bs-toggle="dropdown" href="javascript:void(0);"
                        >GST<i class="fas fa-angle-right dropdown-toggle"></i
                      ></a>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            href="https://services.gst.gov.in/services/searchtpbypan"
                            target="_blank"
                            >Search Taxpayer by PAN</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://services.gst.gov.in/services/searchtp"
                            target="_blank"
                            >Search Taxpayer by GSTIN / UIN
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://cbic-gst.gov.in/gst-goods-services-rates.html"
                            target="_blank"
                            >Search GST Rates
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://services.gst.gov.in/services/searchhsnsac"
                            target="_blank"
                            >Search HSN Code
                          </a>
                        </li>
                      </ul>
                    </li>
                   
                  </ul>
                </li>
                <li class="nav-item dropdown megamenu">
                  <a href="./atom-faq.html" class="nav-link text-uppercase"
                    >FAQ'S</a
                  >
                </li>

                <li class="nav-item dropdown megamenu">
                  <a href="./contactUs.html" class="nav-link text-uppercase"
                    >Contact Us</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
