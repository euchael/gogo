import Link from 'next/link';
import {Fragment} from 'react';

import {Global, css} from '@emotion/react';

const LoginRegisNavigation = () => {
  return (
    <Fragment>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap');
          @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

          $primaryColor: #0ca64b;
          :export {
            primaryColor: $primaryColor;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: Montserrat;
            font-weight: normal;
            font-style: normal;
            color: #000;
            overflow-x: hidden;
            font-size: 13px;
          }
          p {
            margin: 0;
            padding: 0;
            font-family: 'Lato', sans-serif;
            font-size: 15px;
          }

          * {
            margin: 0;
            padding: 0;
          }

          .navbar-toggler:focus,
          a:focus,
          input:focus,
          textarea:focus,
          button:focus,
          .btn:focus,
          .btn.focus,
          .btn:not(:disabled):not(.disabled).active,
          .btn:not(:disabled):not(.disabled):active {
            text-decoration: none;
            outline: none;
            outline: none !important;
            border-color: none !important;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
          }

          .form-check-input:checked {
            background-color: #5830e0;
            border-color: #5830e0;
          }

          select {
            // -webkit-writing-mode: horizontal-tb !important;
            text-rendering: auto;
            color: #081828;
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            display: inline-block;
            text-align: start;
            -webkit-appearance: menulist;
            -moz-appearance: menulist;
            appearance: menulist;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            white-space: pre;
            -webkit-rtl-ordering: logical;
            background-color: -internal-light-dark(white, #3b3b3b);
            cursor: default;
            margin: 0em;
            font: 400 14px;
            border-radius: 0px;
            border-width: 1px;
            border-style: solid;
            border-color: -internal-light-dark(#767676, #858585);
            -o-border-image: initial;
            border-image: initial;
          }

          span,
          a {
            display: inline-block;
            text-decoration: none;
            transition: all 0.4s ease;
            -webkit-transition: all 0.4s ease;
            -moz-transition: all 0.4s ease;
          }

          audio,
          canvas,
          iframe,
          img,
          svg,
          video {
            vertical-align: middle;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: 600;
            margin: 0px;
            color: #081828;
          }

          h1 a,
          h2 a,
          h3 a,
          h4 a,
          h5 a,
          h6 a {
            color: inherit;
          }

          h1 {
            font-size: 50px;
          }

          h2 {
            font-size: 40px;
          }

          h3 {
            font-size: 30px;
          }

          h4 {
            font-size: 25px;
          }

          h5 {
            font-size: 20px;
          }

          h6 {
            font-size: 16px;
          }

          ul,
          ol {
            margin: 0px;
            padding: 0px;
            list-style-type: none;
          }

          .img-bg {
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
          }

          @media only screen and (min-width: 480px) and (max-width: 767px) {
            .container {
              width: 450px;
            }
          }

          /* Bread Crumbs */
          .breadcrumbs {
            position: relative;
            padding-bottom: 45px;
            padding-top: 140px;
            background: #081828;
            z-index: 2;
            text-align: left;
          }

          .breadcrumbs .breadcrumbs-content {
            position: relative;
            text-align: left;
          }

          .breadcrumbs .breadcrumbs-content .page-title {
            font-size: 20px;
            color: #fff;
            font-weight: 600;
            position: relative;
            line-height: 50px;
          }

          .breadcrumbs .breadcrumbs-content .breadcrumb-nav {
            background: transparent;
            border-radius: 0;
            margin-bottom: 0;
            padding: 0;
            display: inline-block;
          }

          .breadcrumbs .breadcrumb-nav {
            text-align: right;
          }

          .breadcrumbs .breadcrumb-nav li {
            display: inline-block;
            position: relative;
            padding-right: 15px;
            margin-right: 15px;
            text-transform: capitalize;
          }

          .breadcrumbs .breadcrumb-nav li:after {
            content: '\ea5c';
            font-family: lineIcons;
            font-size: 10px;
            position: absolute;
            top: 4px;
            right: -7px;
          }

          .breadcrumbs .breadcrumb-nav li:last-child {
            margin: 0;
            padding: 0;
          }

          .breadcrumbs .breadcrumb-nav li:last-child::after {
            display: none;
          }

          .breadcrumbs .breadcrumb-nav li,
          .breadcrumbs .breadcrumb-nav li a {
            color: #fff;
            font-size: 15px;
            font-weight: 500;
          }

          .breadcrumbs .breadcrumb-nav li a {
            position: relative;
          }

          .breadcrumbs .breadcrumb-nav li a:hover {
            color: #5830e0;
          }

          .section {
            padding-top: 0px;
            padding-bottom: 0px;
            position: relative;
          }

          /* Section Title */
          .section-title {
            text-align: center;
            margin-bottom: 80px;
            padding: 0 300px;
            position: relative;
            z-index: 5;
          }

          .section-title h2 {
            font-size: 35px;
            margin-bottom: 20px;
            line-height: 45px;
            text-transform: capitalize;
            position: relative;
            font-weight: 600;
            padding-bottom: 20px;
          }

          .section-title h2:before {
            position: absolute;
            left: 50%;
            margin-left: -25px;
            bottom: -2px;
            height: 4px;
            width: 50px;
            border-radius: 5px;
            background: #5830e0;
            content: '';
          }

          .section-title p {
            font-size: 16px;
            line-height: 26px;
          }

          .section-title.align-right {
            padding: 0;
            padding-left: 600px;
          }

          .section-title.align-right h2:before {
            display: none;
          }

          .section-title.align-right h2:after {
            position: absolute;
            right: 0;
            bottom: -1px;
            height: 2px;
            width: 50px;
            background: #5830e0;
            content: '';
          }

          .section-title.align-left {
            padding: 0;
            padding-right: 600px;
          }

          .section-title.align-left h2:before {
            left: 0;
            margin-left: 0;
          }

          /* One Click Scrool Top Button*/
          .scroll-top {
            width: 45px;
            height: 45px;
            line-height: 45px;
            background: #5830e0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            font-size: 14px;
            color: #fff !important;
            border-radius: 0;
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 9;
            cursor: pointer;
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
            border-radius: 4px;
          }

          .scroll-top:hover {
            -webkit-box-shadow: 0 1rem 3rem rgba(35, 38, 45, 0.15) !important;
            box-shadow: 0 1rem 3rem rgba(35, 38, 45, 0.15) !important;
            -webkit-transform: translate3d(0, -5px, 0);
            transform: translate3d(0, -5px, 0);
            background-color: #081828;
          }

          /* Overlay */
          .overlay {
            position: relative;
          }

          .overlay::before {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.4;
            background: #081828;
            content: '';
            -webkit-transition: all 0.4s ease;
            transition: all 0.4s ease;
            z-index: 5;
          }

          /* Pagination CSS */
          .pagination {
            text-align: left;
            margin: 30px 0 0 0;
            display: block;
          }

          .pagination.center {
            text-align: center;
          }

          .pagination.right {
            text-align: right;
          }

          .pagination.left {
            text-align: left;
          }

          .pagination .pagination-list {
            display: inline-block;
            overflow: hidden;
          }

          .pagination .pagination-list li {
            margin-right: 5px;
            display: inline-block;
            margin-top: 10px;
          }

          .pagination .pagination-list li:last-child {
            margin-right: 0px;
          }

          .pagination .pagination-list li a {
            background: #fff;
            color: #081828;
            font-weight: 500;
            font-size: 15px;
            border-radius: 0;
            line-height: 38px;
            height: 40px;
            width: 40px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #eee;
          }

          .pagination .pagination-list li.active a,
          .pagination .pagination-list li:hover a {
            background: #5830e0;
            color: #fff;
            border-color: transparent;
          }

          .pagination .pagination-list li a i {
            font-size: 13px;
          }

          .blog-grids.pagination {
            margin-top: 50px;
            text-align: center;
          }

          .button .btn {
            display: inline-block;
            text-transform: capitalize;
            font-size: 15px;
            font-weight: 500;
            padding: 15px 30px;
            background-color: #5830e0;
            color: #fff;
            border: none;
            -webkit-transition: 0.5s;
            transition: 0.5s;
            border-radius: 4px;
          }

          .button .btn:hover {
            background-color: #081828;
            color: #fff;
            -webkit-box-shadow: 0 1rem 3rem rgba(35, 38, 45, 0.15) !important;
            box-shadow: 0 1rem 3rem rgba(35, 38, 45, 0.15) !important;
          }

          .button .btn-alt {
            background-color: #081828;
            color: #fff;
          }

          .button .btn-alt:hover {
            background-color: #5830e0;
            color: #fff;
          }

          .align-left {
            text-align: left;
          }

          .align-right {
            text-align: right;
          }

          .align-center {
            text-align: center;
          }

          /* Preloader */
          .preloader {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999999999;
            width: 100%;
            height: 100%;
            background-color: #fff;
            overflow: hidden;
          }

          .preloader-inner {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }

          .preloader-icon {
            width: 100px;
            height: 100px;
            display: inline-block;
            padding: 0px;
          }

          .preloader-icon span {
            position: absolute;
            display: inline-block;
            width: 100px;
            height: 100px;
            border-radius: 100%;
            background: #5830e0;
            -webkit-animation: preloader-fx 1.6s linear infinite;
            animation: preloader-fx 1.6s linear infinite;
          }

          .preloader-icon span:last-child {
            animation-delay: -0.8s;
            -webkit-animation-delay: -0.8s;
          }

          @keyframes preloader-fx {
            0% {
              -webkit-transform: scale(0, 0);
              transform: scale(0, 0);
              opacity: 0.5;
            }

            100% {
              -webkit-transform: scale(1, 1);
              transform: scale(1, 1);
              opacity: 0;
            }
          }

          @-webkit-keyframes preloader-fx {
            0% {
              -webkit-transform: scale(0, 0);
              opacity: 0.5;
            }

            100% {
              -webkit-transform: scale(1, 1);
              opacity: 0;
            }
          }

          /*======================================
01. Start Header CSS
========================================*/
          .header {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            background: #fff;
          }

          .header .login-button {
            // margin-left: 40px;
          }

          .header .login-button ul {
            /* padding: 14px 20px; */
            border-radius: 30px;
          }

          .header .login-button ul li {
            display: inline-block;
            margin-right: 5px;
            padding-right: 10px;
            // border-right: 1px solid #eee;
            height: 100%;
          }

          .header .login-button ul li:last-child {
            margin: 0;
            padding: 0;
            border: none;
          }

          .header .login-button ul li a {
            color: #081828;
            font-size: 14px;
            font-weight: 500;
          }

          .header .login-button ul li a:hover {
            color: #5830e0;
          }

          .header .login-button ul li a i {
            display: inline-block;
            color: #5830e0;
            margin-right: 4px;
            font-size: 15px;
          }

          .sticky {
            position: fixed;
            z-index: 99;
            background-color: #fff;
            -webkit-box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.05);
            box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.05);
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
            top: 0;
          }

          .navbar-expand-lg .navbar-nav {
            margin-left: auto;
          }

          .sticky .navbar .navbar-nav .nav-item a {
            color: #333;
          }

          .header .navbar .navbar-nav .nav-item a.active {
            color: #0ca64b;
            font-size: 12px;
            font-weight: 500;
          }

          .sticky .navbar .navbar-nav .nav-item a.active {
            color: #0ca64b;
          }

          .header .navbar .navbar-nav .nav-item .sub-menu a.active {
            color: #fff;
          }

          .sticky .navbar .navbar-nav .nav-item .sub-menu a.active {
            color: #fff;
          }

          .sticky .navbar .mobile-menu-btn .toggler-icon {
            background: #333;
          }

          /* Topbar */
          .header .toolbar-area {
            padding: 18px 0;
            background: #5830e0;
            overflow: hidden;
          }

          .header .toolbar-area .toolbar-social {
            float: right;
          }

          .header .toolbar-area .toolbar-social ul li {
            display: inline-block;
            margin-right: 15px;
          }

          .header .toolbar-area .toolbar-social ul li .title {
            display: inline-block;
            font-weight: 600;
            font-size: 13px;
            color: #fff;
          }

          .header .toolbar-area .toolbar-social ul li:last-child {
            margin: 0;
          }

          .header .toolbar-area .toolbar-social ul li a {
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
          }

          .header .toolbar-area .toolbar-social ul li a:hover {
            color: #081828;
          }

          .header .toolbar-login {
            float: left;
          }

          .header .toolbar-login span {
            display: inline-block;
            color: #fff;
            margin: 0px 12px;
            font-size: 13px;
            font-weight: 600;
          }

          .header .toolbar-login a {
            display: inline-block;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            font-size: 13px;
          }

          .header .toolbar-login a i {
            display: inline-block;
            margin-right: 3px;
            color: #fff;
            font-size: 11px;
            height: 22px;
            width: 22px;
            text-align: center;
            display: inline-block;
            background: #fff;
            border-radius: 50%;
            color: #5830e0;
            line-height: 22px;
          }

          .header .toolbar-login a:hover {
            color: #081828;
          }

          .header .toolbar-login a:last-child {
            margin: 0;
          }

          /*===== NAVBAR =====*/
          .navbar-area {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 99;
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
            padding: 0;
          }

          .navbar-area.sticky {
            position: fixed;
            z-index: 99;
            background: #5830e0;
            -webkit-box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.05);
            box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.05);
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
            background: #fff;
            padding: 0px 0;
          }

          .navbar-area.sticky .toolbar-area {
            display: none;
          }

          .navbar {
            // padding: 0;
            position: relative;
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
          }

          .navbar-brand {
            padding: 0;
            font-size: 10px !important;
          }

          .navbar-brand img {
            width: 230px;
          }

          .mobile-menu-btn {
            padding: 0px;
          }

          .mobile-menu-btn:focus {
            text-decoration: none;
            outline: none;
            -webkit-box-shadow: none;
            box-shadow: none;
          }

          .mobile-menu-btn .toggler-icon {
            width: 30px;
            height: 2px;
            background-color: #222;
            display: block;
            margin: 5px 0;
            position: relative;
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
          }

          .mobile-menu-btn.active .toggler-icon:nth-of-type(1) {
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            top: 7px;
          }

          .mobile-menu-btn.active .toggler-icon:nth-of-type(2) {
            opacity: 0;
          }

          .mobile-menu-btn.active .toggler-icon:nth-of-type(3) {
            -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
            top: -7px;
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .navbar-collapse {
              position: absolute;
              top: 66px !important;
              left: 0;
              width: 100%;
              background-color: #fff;
              z-index: 9;
              -webkit-box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.1);
              box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.1);
              padding: 10px 20px;
              max-height: 350px;
              overflow-y: scroll;
              border-top: 1px solid #eee;
            }
          }

          @media (max-width: 767px) {
            .navbar-collapse {
              position: absolute;
              top: 165% !important;
              left: 0;
              width: 100%;
              background-color: #fff;
              z-index: 9;
              -webkit-box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.1);
              box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.1);
              padding: 10px 20px;
              max-height: 350px;
              overflow-y: scroll;
            }
          }

          .navbar-expand-lg .navbar-nav {
            margin: 0;
            margin-right: auto !important;
          }

          .navbar-nav .nav-item {
            z-index: 1;
            position: relative;
            margin-right: 40px;
          }

          .navbar-nav .nav-item:last-child {
            margin-right: 0 !important;
          }

          .navbar-nav .nav-item:hover a {
            color: #0ca64b;
          }

          .navbar-nav .nav-item a {
            font-size: 13px;
            color: #4b4b4c;
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
            position: relative;
            padding: 18px 0;
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            font-weight: 500;
            transition: all 0.3s ease-out 0s;
            position: relative;
            text-transform: capitalize;
          }

          .navbar-nav .nav-item a::after {
            opacity: 0;
            visibility: hidden;
          }

          /* .navbar-nav .nav-item a::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 3px;
      width: 0%;
      background: #5830e0;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    } */

          .navbar-nav .nav-item a.active:before {
            width: 100%;
          }

          .navbar-nav .nav-item:hover a:before {
            width: 100%;
          }

          .navbar-nav .nav-item a.active {
            color: #5830e0;
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .navbar-nav .nav-item a.dd-menu {
              padding-right: 30px;
            }
          }

          @media only screen and (max-width: 992px) {
            .header .login-button {
              display: none;
            }
          }

          .navbar-nav .nav-item a.dd-menu::after {
            content: '\ea58';
            font: normal normal normal 1em/1 'LineIcons';
            position: absolute;
            right: 17px;
            font-size: 10px;
            top: 50%;
            margin-left: 5px;
            margin-top: 0px;
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
            height: 10px;
            margin-top: -5px;
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .navbar-nav .nav-item a.dd-menu::after {
              right: 13px;
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 991px),
            (max-width: 767px) {
            .navbar-nav .nav-item a.dd-menu::after {
              top: 16px;
              right: 0;
              -webkit-transform: rotate(180deg);
              transform: rotate(180deg);
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 991px),
            (max-width: 767px) {
            .navbar-nav .nav-item a.collapsed::after {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
          }

          .navbar-nav .nav-item:hover > .sub-menu {
            top: 100%;
            opacity: 1;
            visibility: visible;
          }

          .navbar-nav .nav-item:hover > .sub-menu .sub-menu {
            left: 100%;
            top: 0;
          }

          .navbar-nav .nav-item .sub-menu {
            border-top: 1px solid #eee;
            padding: 10px;
            min-width: 220px;
            background: #fff;
            -webkit-box-shadow: 0px 10px 20px #1414140e;
            box-shadow: 0px 10px 20px #1414140e;
            position: absolute;
            top: 100% !important;
            left: 0;
            opacity: 0;
            visibility: hidden;
            -webkit-transition: all 0.3s ease-out 0s;
            transition: all 0.3s ease-out 0s;
          }

          .navbar-nav .nav-item .sub-menu.mega-menu {
            width: 500px;
            white-space: none !important;
            padding-right: 5px;
          }

          .navbar-nav .nav-item .sub-menu.mega-menu .mega-menu-title {
            font-size: 16px;
            display: block;
            font-weight: 500;
            color: #081828;
            margin-bottom: 10px;
            padding-left: 12px;
            padding-top: 12px;
          }

          .navbar-nav .nav-item .sub-menu.mega-menu .single-block {
            width: 49.5% !important;
            display: inline-block !important;
            white-space: none !important;
            border-right: 1px solid #eee;
            height: 100%;
            float: left;
          }

          .navbar-nav
            .nav-item
            .sub-menu.mega-menu
            .single-block:first-of-type {
            padding-right: 10px;
          }

          .navbar-nav .nav-item .sub-menu.mega-menu .single-block:last-child {
            border: none;
            padding-left: 10px;
          }

          .navbar-nav .nav-item .sub-menu.mega-menu .single-block li a:hover {
            background-color: #5830e0;
            color: #fff;
          }

          .navbar-nav .nav-item .sub-menu.mega-menu .single-block li.active a {
            background-color: #5830e0;
            color: #fff;
          }

          .navbar-nav .nav-item .sub-menu .nav-item {
            width: 100%;
          }

          .navbar-nav .nav-item .sub-menu .nav-item a {
            padding: 12px 15px;
            color: #888;
            display: block;
            width: 100%;
            font-size: 15px;
            font-weight: 400;
            text-transform: capitalize;
            position: relative;
          }

          .navbar-nav .nav-item .sub-menu .nav-item a:before {
            display: none;
          }

          .navbar-nav .nav-item .sub-menu.left-menu {
            left: -100%;
          }

          .navbar-nav .nav-item .sub-menu.collapse:not(.show) {
            display: block;
          }

          .display-center {
            display: flex;
            justify-content: center;
          }

          .container-full-satuplatform {
            margin-left: 50px;
            margin-right: 50px;
          }
          /* .container {
      max-width: 1200px !important;
    } */
          .container-satuplatform {
            max-width: 1230px;
            margin: 0 auto;
            padding-left: 15px;
            padding-right: 15px;
            padding-right: var(--bs-gutter-x, 0.75rem);
            padding-left: var(--bs-gutter-x, 0.75rem);
          }

          @media only screen and (min-width: 768px) and (max-width: 991px),
            (max-width: 767px) {
            .navbar-nav .nav-item .sub-menu.collapse:not(.show) {
              display: none;
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 991px),
            (max-width: 767px) {
            .navbar-nav .nav-item {
              margin: 0;
            }

            .navbar-nav .nav-item a {
              padding: 12px 16px !important;
            }

            .navbar-nav .nav-item a::before {
              display: none;
            }

            .navbar-nav .nav-item .sub-menu {
              position: static;
              width: 100%;
              opacity: 1;
              visibility: visible;
              -webkit-box-shadow: none;
              box-shadow: none;
              padding: 0;
              border: none;
              margin-left: 15px;
              margin-right: 15px;
            }

            .navbar-nav .nav-item .sub-menu.mega-menu {
              width: 100% !important;
              white-space: none !important;
              padding-right: 0;
            }

            .navbar-nav .nav-item .sub-menu.mega-menu .single-block {
              width: 100% !important;
              display: block !important;
              white-space: none !important;
              border: none;
              height: 100%;
              float: left;
            }

            .navbar-nav
              .nav-item
              .sub-menu.mega-menu
              .single-block:first-of-type {
              padding-right: 0;
            }

            .navbar-nav .nav-item .sub-menu.mega-menu .single-block:last-child {
              border: none;
              padding-left: 0;
            }

            .navbar-nav .nav-item .sub-menu .nav-item a {
              padding: 12px 12px;
            }

            .navbar-nav .nav-item .sub-menu .nav-item a:hover {
              background: #5830e0 !important;
              color: #fff !important;
            }

            .navbar-nav .nav-item .sub-menu::after {
              display: none;
            }
          }

          .navbar-nav .nav-item .sub-menu > li {
            display: block;
            margin-left: 0;
          }

          .navbar-nav .nav-item .sub-menu > li:last-child {
            border: none;
          }

          .navbar-nav .nav-item .sub-menu > li.active > a,
          .navbar-nav .nav-item .sub-menu > li:hover > a {
            color: #0ca64b !important;
            /* background-color: #5830e0 !important; */
          }

          .navbar-nav .nav-item .sub-menu > li > a {
            font-weight: 400;
            display: block;
            padding: 12px 15px;
            font-size: 13px;
            color: #4b4b4c;
            font-weight: 400;
          }

          .navbar-nav .nav-item .sub-menu > li:first-of-type a {
            border: none;
          }

          .navbar-nav .nav-item .sub-menu > li > a:hover {
            /* background: #5830e0; */
            color: #0ca64b;
          }

          .mobile-show {
            display: none;
          }

          @media only screen and (min-width: 768px) and (max-width: 991px),
            (max-width: 767px) {
            .navbar-nav .nav-item a {
              color: #0ca64b;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
              padding: 10px 0;
            }

            .navbar-nav .nav-item a::after {
              opacity: 1;
              visibility: visible;
            }

            .navbar-nav .nav-item .sub-menu > li.active {
              background: #f9f9f9 !important;
              color: #5830e0 !important;
            }

            .header.style3.navbar-area .header-social {
              display: none;
            }

            .navbar-nav .nav-item .sub-menu > li.active > a,
            .navbar-nav .nav-item .sub-menu > li:hover > a {
              color: #fff !important;
              background-color: #5830e0 !important;
            }
          }

          .header-button {
            display: inline-block;
            margin-left: 10px;
          }

          .header-button .btn i {
            font-size: 14px;
            display: inline-block;
            margin-right: 5px;
          }

          @media only screen and (min-width: 991px) and (max-width: 1200px) {
            .section-title {
              margin-bottom: 50px;
              padding: 0 220px;
            }

            .header .login-button {
              margin-left: 20px;
            }

            /* .header .login-button ul {
        padding: 0;
      } */

            .header .nav-item {
              margin-right: 10px;
            }

            .header .nav-item a {
              padding: 32px 0 !important;
            }

            .header .nav-item .sub-menu li a {
              padding: 12px 15px !important;
            }

            .header .nav-item .sub-menu.mega-menu {
              width: 460px;
            }
          }

          /* Tablet Screen */
          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .section {
              padding: 0 0px;
            }

            .section-title {
              margin-bottom: 30px;
              padding: 0px 90px;
            }

            .section-title h2 {
              font-size: 30px;
              line-height: 38px;
            }

            .section-title p {
              font-size: 16px;
            }

            .section-title.align-left {
              padding: 0;
              padding-right: 200px;
            }

            .breadcrumbs {
              padding-top: 120px;
              padding-bottom: 50px;
            }

            .breadcrumbs .page-title {
              font-size: 28px;
            }

            .button .btn {
              padding: 12px 25px;
              font-size: 14px;
              font-weight: 500;
            }

            #scrollUp {
              bottom: 55px;
            }

            .header {
              padding: 0 0;
            }

            .navbar-area.sticky {
              padding: 15px 0;
            }

            .navbar-brand img {
              width: 170px;
            }

            .footer .footer-top {
              padding: 50px 0 !important;
              padding-top: 45px !important;
            }

            .footer .single-footer h3 {
              margin-bottom: 25px !important;
            }

            .footer .single-footer {
              margin-top: 40px;
            }

            .footer .footer-bottom .footer-social {
              margin-top: 30px !important;
            }
          }

          /* Mobile Screen */
          @media only screen and (max-width: 767px) {
            .mobile-show {
              display: inline-block;
            }
            .section {
              padding: 50px 0px;
            }

            .section-title {
              margin-bottom: 25px;
              padding: 0px 10px;
            }

            .section-title h2 {
              font-size: 25px;
              margin-top: 3px;
              line-height: 35px;
            }

            .section-title p {
              font-size: 16px;
            }

            .section-title.align-left {
              padding: 0;
              padding-right: 0;
            }

            .breadcrumbs {
              padding-top: 120px;
              padding-bottom: 50px;
            }

            .breadcrumbs .breadcrumbs-content {
              text-align: center;
            }

            .breadcrumbs .page-title {
              font-size: 22px;
              line-height: 30px !important;
            }

            .breadcrumbs .breadcrumb-nav {
              float: none !important;
              margin-top: 15px;
              text-align: center;
            }

            .button .btn {
              padding: 12px 25px;
              font-size: 14px;
              font-weight: 500;
            }

            #scrollUp {
              bottom: 55px;
            }

            .navbar-brand img {
              width: 170px;
            }

            .header {
              padding: 0 0;
            }

            .header .header-button {
              display: none;
            }

            /* .header .login-button {
        display: none;
      } */

            .header .navbar-collapse {
              top: 39px !important;
              border-top: 1px solid #eee;
            }

            .sticky .navbar .navbar-nav .nav-item .sub-menu .nav-item a {
              color: #081828;
            }

            .sticky .navbar .navbar-nav .nav-item:hover a {
              color: #5830e0;
            }

            .breadcrumbs .bread-list {
              margin-top: 8px;
            }

            .navbar-area.sticky {
              padding: 20px 0;
            }

            .navbar-brand img {
              width: 170px;
            }

            .breadcrumbs .bread-list {
              margin-top: 8px;
            }
          }

          /*======================================
Error 404 CSS
========================================*/
          .error-area {
            height: 100vh;
            text-align: center;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .d-table {
            width: 100%;
            height: 100%;
          }

          .d-table {
            display: table !important;
          }

          .d-table-cell {
            vertical-align: middle;
          }

          .d-table-cell {
            display: table-cell !important;
          }

          .error-area .error-content h1 {
            font-size: 100px;
            color: #5830e0;
            margin-bottom: 8px;
            font-weight: 800;
            line-height: 100px;
          }

          .error-area .error-content h2 {
            font-size: 25px;
            margin-bottom: 8px;
            color: #081828;
          }

          .error-area .error-content p {
            font-weight: 500;
            margin-bottom: 40px;
          }

          /*======================================
Footer CSS
========================================*/
          .footer {
            background: #081828;
            margin-top: 20px;
          }

          .footer .footer-top {
            padding: 100px 0;
            padding-top: 70px;
            border-bottom: 1px solid #ebebeb s;
          }
          .footer_logo {
            padding-bottom: 40px;
          }
          .kontak {
            display: flex;
            align-content: flex-end;
            justify-content: flex-start;
            align-items: flex-end;
            padding-bottom: 20px;
          }

          // .footer .single-footer {
          // margin-top: 30px;
          // }

          .footer .single-footer.mobile-app .app-button .btn {
            border: 1px solid #eeeeee4a;
            border-radius: 6px;
            padding: 12px 35px;
            position: relative;
            text-align: left;
            padding-left: 70px;
            margin-bottom: 12px;
            min-width: 192px;
            color: #e1e1e1;
          }

          .footer .single-footer.mobile-app .app-button .btn:hover {
            border-color: transparent;
            background: #5830e0;
            color: #fff;
          }

          .footer .single-footer.mobile-app .app-button .btn:last-child {
            margin: 0;
          }

          .footer .single-footer.mobile-app .app-button .btn i {
            font-size: 28px;
            position: absolute;
            left: 22px;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
          }

          .footer .single-footer.mobile-app .app-button .btn .text {
            font-size: 14px;
            font-weight: 500;
          }

          .footer .single-footer.mobile-app .app-button .btn .text .small-text {
            font-weight: 400;
            font-size: 13px;
            display: block;
            margin-bottom: -1px;
          }

          .footer .single-footer.f-link li {
            display: block;
            margin-bottom: 10px;
          }

          .footer .single-footer.f-link li:last-child {
            margin: 0;
          }

          .footer .single-footer.f-link li a {
            font-size: 15px;
            font-weight: 400;
            color: #e1e1e1;
          }

          .footer .single-footer.f-link li a:hover {
            color: #5830e0;
          }

          .footer .single-footer.f-contact ul li {
            display: block;
            margin-bottom: 25px;
            line-height: 25px;
            color: #e1e1e1;
          }

          .footer .single-footer.f-contact ul li:last-child {
            margin-bottom: 0;
          }

          .footer .single-footer h3 {
            font-size: 18px;
            font-weight: 600;
            display: block;
            margin-bottom: 15px;
            color: #fff;
          }

          .footer .footer-bottom {
            text-align: center;
            position: relative;
            z-index: 1;
          }

          .footer .footer-bottom .inner {
            border-top: 1px solid #ebebeb4f;
            padding: 50px 0;
          }

          .footer .footer-bottom .footer-bottom-links li {
            display: inline-block;
            margin-right: 15px;
            position: relative;
            padding-right: 15px;
          }

          .footer .footer-bottom .footer-bottom-links li::before {
            position: absolute;
            content: '';
            right: -3px;
            top: 50%;
            height: 1px;
            width: 5px;
            background: #888;
          }

          .footer .footer-bottom .footer-bottom-links li:last-child {
            margin: 0;
            padding: 0;
          }

          .footer .footer-bottom .footer-bottom-links li:last-child::before {
            display: none;
          }

          .footer .footer-bottom .footer-bottom-links li a {
            color: #e1e1e1;
            font-weight: 400;
          }

          .footer .footer-bottom .footer-bottom-links li a:hover {
            color: #5830e0;
          }

          .footer .footer-bottom .copyright-text {
            margin-top: 15px;
            color: #e1e1e1;
            font-family: 'Jost', sans-serif;
          }

          .footer .footer-bottom .copyright-text a {
            color: #e1e1e1;
          }

          .footer .footer-bottom .copyright-text a:hover {
            color: #5830e0;
          }

          .footer .footer-bottom .footer-social {
            margin-top: 40px;
          }

          .footer .footer-bottom .footer-social li {
            display: inline-block;
            margin-right: 10px;
          }

          .footer .footer-bottom .footer-social li:last-child {
            margin: 0;
          }

          .footer .footer-bottom .footer-social li a {
            height: 40px;
            width: 40px;
            line-height: 40px;
            text-align: center;
            display: block;
            border-radius: 50%;
            color: #fff;
            background: transparent;
            border: 1px solid #eee3;
          }

          .footer .footer-bottom .footer-social li a:hover {
            color: #fff;
            background: #5830e0;
            border-color: transparent;
          }

          //================

          .btn-login {
            display: inline-block;
            font-weight: 400;
            line-height: 1.5;
            color: #fff;
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            background-color: $primaryColor;
            border: 1px solid transparent;
            padding: 0.375rem 1.5rem;
            font-size: 1rem;
            border-radius: 0.5rem;
            transition: color 0.15s ease-in-out,
              background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
          }

          .btn-kontak {
            display: inline-block;
            font-weight: 400;
            line-height: 1.5;
            color: $primaryColor;
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            background-color: transparent;
            border: 1px solid $primaryColor;
            padding: 0.375rem 1.5rem;
            font-size: 1rem;
            border-radius: 0.5rem;
            transition: color 0.15s ease-in-out,
              background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
          }
        `}
      />
      <header
        className='header navbar-area'
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '70px',
          alignItems: 'center',
        }}
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <div className='nav-inner'>
                <nav className={'navbar navbar-expand-lg'}>
                  <Link href='/'>
                    <span
                      style={{cursor: 'pointer'}}
                      className='navbar-brand'
                      href='index.html'
                    >
                      <img src='/assets/images/logo.svg' alt='Logo' />
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default LoginRegisNavigation;
