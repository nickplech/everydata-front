import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  overflow-x: hidden;
  .cd-img-replace {
    /* replace text with background images */
    display: inline-block;
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
  }

  .cd-btn {
    display: inline-block;
    width: 120px;
    height: 30px;
    line-height: 30px;
    margin-right: 8px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    font-family: 'PT Sans', sans-serif;
    color: #ffffff;
    background-color: rgba(200, 100, 100, 1);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    margin-bottom: 25px;
  }
  .no-touch .cd-btn:hover {
    background-color: #756da4;
  }
  @media only screen and (min-width: 1170px) {
    .cd-btn {
      width: 160px;
      height: 45px;
      line-height: 45px;
      margin-right: 15px;
      font-size: 1.4rem;
      letter-spacing: 2px;
    }
  }

  .cd-product {
    position: relative;
    width: 90%;
    max-width: 1170px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1170px) {
    .cd-product {
      padding-top: 50px;
      min-height: 600px;
    }
    .cd-product.is-product-tour {
      height: auto;
      padding-bottom: 100px;
    }
  }

  .cd-product-intro {
    padding: 0 0;
    text-align: left;
  }
  .cd-product-intro h1 {
    margin-bottom: 0px;
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'PT Sans', sans-serif;
    color: rgba(20, 20, 20, 0.6);
  }
  .cd-product-intro p {
    max-width: 560px;
    color: rgba(20, 20, 20, 0.6);
    padding: 0 0 20px;
    font-size: 1.4rem;
    line-height: 1;
  }
  .cd-product-intro::before {
    /* never visible - this is used in jQuery to check the current MQ */
    content: 'mobile';
    display: none;
  }

  @media (max-width: 768px) {
    .cd-product-intro h1 {
      margin-top: 50px;
    }
  }
  @media only screen and (min-width: 1170px) {
    .cd-product-intro {
      /* Force Hardware Acceleration in WebKit */
      -webkit-transform: translateZ(0);
      -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
      -o-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      position: absolute;
      top: 200px;
      left: 0;
      width: 50%;
      padding: 0;
      text-align: left;
      -webkit-transition: -webkit-transform 0.6s, opacity 0.6s;
      -moz-transition: -moz-transform 0.6s, opacity 0.6s;
      transition: transform 0.6s, opacity 0.6s;
    }
    .is-product-tour .cd-product-intro {
      opacity: 0;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .cd-product-intro h1 {
      font-size: 4rem;
    }
    .cd-product-intro p {
      font-size: 1.6rem;
      padding: 10px 0 44px;
      margin: 0;
    }
    .cd-product-intro::before {
      /* never visible - this is used in jQuery to check the current MQ */
      content: 'desktop';
    }
  }

  .no-csstransforms3d #cd-start {
    /* remove start button if CSS 3D Transforms are not supported */
    display: none;
  }

  .cd-product-mockup {
    width: 90%;
    /* set here the max-width for the mockup */
    max-width: 450px;
    margin: 0 auto 50px;
    position: relative;
  }
  .cd-product-mockup img {
    display: block;
    position: relative;
    /* Firefox bug - 3D CSS transform, jagged edges */
    outline: 1px solid transparent;
  }
  @media only screen and (min-width: 1170px) {
    .cd-product-mockup {
      margin-bottom: 0;
      /* Force Hardware Acceleration in WebKit */
      -webkit-transform: translateZ(0);
      -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
      -o-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transform-style: preserve-3d;
      -moz-transform-style: preserve-3d;
      -ms-transform-style: preserve-3d;
      -o-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -webkit-transform-origin: center top;
      -moz-transform-origin: center top;
      -ms-transform-origin: center top;
      -o-transform-origin: center top;
      transform-origin: center top;
      -webkit-transform: rotateX(-60deg) rotateZ(-40deg) translateX(50px)
        translateY(300px);
      -moz-transform: rotateX(-60deg) rotateZ(-40deg) translateX(50px)
        translateY(300px);
      -ms-transform: rotateX(-60deg) rotateZ(-40deg) translateX(50px)
        translateY(300px);
      -o-transform: rotateX(-60deg) rotateZ(-40deg) translateX(50px)
        translateY(300px);
      transform: rotateX(-60deg) rotateZ(-40deg) translateX(50px)
        translateY(300px);
      -webkit-transition: -webkit-transform 0.6s;
      -moz-transition: -moz-transform 0.6s;
      transition: transform 0.6s;
    }
    .cd-product-mockup::before {
      /* mockup shadow */
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      /* play with these values to create a realistic shadow */
      height: 37%;
      box-shadow: 0px 0px 30px 175px rgba(0, 0, 0, 0.1);
      -webkit-transform: translateZ(-100px) translateY(480px);
      -moz-transform: translateZ(-100px) translateY(480px);
      -ms-transform: translateZ(-100px) translateY(480px);
      -o-transform: translateZ(-100px) translateY(480px);
      transform: translateZ(-70px) translateY(410px);
      -webkit-transition: -webkit-transform 0.6s;
      -moz-transition: -moz-transform 0.6s;
      transition: transform 0.6s;
    }
    .is-product-tour .cd-product-mockup {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    .is-product-tour .cd-product-mockup::before {
      -webkit-transform: translateZ(-100px) translateX(226px) translateY(216px);
      -moz-transform: translateZ(-100px) translateX(226px) translateY(216px);
      -ms-transform: translateZ(-100px) translateX(226px) translateY(216px);
      -o-transform: translateZ(-100px) translateX(226px) translateY(216px);
      transform: translateZ(-100px) translateX(226px) translateY(216px);
    }
  }

  .cd-product.is-product-tour > .cd-product-mockup::before {
    /* mockup shadow */

    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    /* play with these values to create a realistic shadow */
    height: 37%;
    box-shadow: 143px 0px 30px 175px rgba(0, 0, 0, 0.2);
    -webkit-transform: translateZ(-100px) translateY(480px);
    -moz-transform: translateZ(-100px) translateY(480px);
    -ms-transform: translateZ(-100px) translateY(480px);
    -o-transform: translateZ(-100px) translateY(480px);
    transform: translateZ(-70px) translateY(230px);
    -webkit-transition: -webkit-transform 0.6s;
    -moz-transition: -moz-transform 0.6s;
    transition: transform 0.6s;
  }

  .no-csstransforms3d .cd-product:after {
    content: '';
    display: table;
    clear: both;
  }
  .no-csstransforms3d .cd-product-mockup {
    float: right;
  }
  .no-csstransforms3d .cd-product-mockup::before {
    display: none;
  }

  .cd-3d-right-side,
  .cd-3d-bottom-side {
    display: none;
  }
  @media only screen and (min-width: 1170px) {
    .cd-3d-right-side,
    .cd-3d-bottom-side {
      display: block;
      position: absolute;
      left: 0;
      background-image: url('../static/img/samplephil.jpg');
      /* Firefox bug - 3D CSS transform, jagged edges */
      outline: 1px solid transparent;
    }
    .cd-3d-right-side-m {
      background-image: url('../static/img/samplephil.jpg');
    }
    .cd-3d-right-side::after,
    .cd-3d-bottom-side::after {
      /* darken the right/bottom sides */
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  @media only screen and (min-width: 1170px) {
    .cd-3d-right-side {
      top: -1px;
      width: 10px;
      height: 100%;
      background-size: auto 100%;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -ms-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
      -webkit-transform: translateZ(-1px) translateY(1px) rotateY(-90deg);
      -moz-transform: translateZ(-1px) translateY(1px) rotateY(-90deg);
      -ms-transform: translateZ(-1px) translateY(1px) rotateY(-90deg);
      -o-transform: translateZ(-1px) translateY(1px) rotateY(-90deg);
      transform: translateZ(-1px) translateY(1px) rotateY(-90deg);
    }

    .cd-3d-bottom-side {
      bottom: 0;
      width: 74.3%;
      height: 10px;
      background-position: bottom center;
      background-size: 100% auto;
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
      -webkit-transform: translateZ(-1px) rotateX(-90deg);
      -moz-transform: translateZ(-1px) rotateX(-90deg);
      -ms-transform: translateZ(-1px) rotateX(-90deg);
      -o-transform: translateZ(-1px) rotateX(-90deg);
      transform: translateZ(-1px) rotateX(-90deg);
    }
    .cd-3d-bottom-side::after {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  .no-csstransforms3d .cd-3d-right-side,
  .no-csstransforms3d .cd-3d-bottom-side {
    display: none;
  }

  .cd-close-product-tour {
    /* close icon - product tour */
    display: none;
  }
  @media only screen and (min-width: 1170px) {
    .cd-close-product-tour {
      display: block;
      position: absolute;
      top: 40px;
      right: 0;
      height: 40px;
      width: 40px;
      opacity: 0;
      visibility: hidden;
    }
    .no-touch .cd-close-product-tour:hover {
      opacity: 0.8;
    }
    .cd-close-product-tour::after,
    .cd-close-product-tour::before {
      /* these are used to create the 'X' icon */
      content: '';
      height: 40px;
      width: 2px;
      position: absolute;
      left: 50%;
      top: 50%;
      background-color: rgba(20, 20, 20, 0.6);
    }
    .cd-close-product-tour::after {
      -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
      -moz-transform: translateX(-50%) translateY(-50%) rotate(45deg);
      -ms-transform: translateX(-50%) translateY(-50%) rotate(45deg);
      -o-transform: translateX(-50%) translateY(-50%) rotate(45deg);
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
    }
    .cd-close-product-tour::before {
      -webkit-transform: translateX(-50%) translateY(-50%) rotate(-45deg);
      -moz-transform: translateX(-50%) translateY(-50%) rotate(-45deg);
      -ms-transform: translateX(-50%) translateY(-50%) rotate(-45deg);
      -o-transform: translateX(-50%) translateY(-50%) rotate(-45deg);
      transform: translateX(-50%) translateY(-50%) rotate(-45deg);
    }
    .cd-close-product-tour.is-visible {
      visibility: visible;
      opacity: 1;
    }
  }

  .cd-single-point {
    position: absolute;
    border-radius: 50%;
    list-style: none;
  }
  .cd-single-point > a {
    position: relative;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: inherit;
    background: #ea4a55;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    z-index: 2;
    -webkit-transition: background-color 0.3s;
    -moz-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }
  .cd-single-point > a::after,
  .cd-single-point > a:before {
    /* rotating plus icon */
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    background-color: #ffffff;
    -webkit-transition: -webkit-transform 0.3s;
    -moz-transition: -moz-transform 0.3s;
    transition: transform 0.3s;
  }
  .cd-single-point > a::after {
    height: 2px;
    width: 12px;
  }
  .cd-single-point > a::before {
    height: 12px;
    width: 2px;
  }
  .cd-single-point::after {
    /* this is used to create the pulse animation */
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
    background-color: transparent;
    -webkit-animation: cd-pulse 2s infinite;
    -moz-animation: cd-pulse 2s infinite;
    animation: cd-pulse 2s infinite;
  }
  .cd-single-point:nth-of-type(1) {
    bottom: 58%;
    right: 40%;
  }
  .cd-single-point:nth-of-type(2) {
    top: 6%;
    right: 5%;
  }
  .cd-single-point:nth-of-type(3) {
    top: 6%;
    left: 14%;
  }
  .cd-single-point.is-open > a {
    background-color: #685f99;
  }
  .cd-single-point.is-open > a::after,
  .cd-single-point.is-open > a::before {
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(135deg);
    -moz-transform: translateX(-50%) translateY(-50%) rotate(135deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(135deg);
    -o-transform: translateX(-50%) translateY(-50%) rotate(135deg);
    transform: translateX(-50%) translateY(-50%) rotate(135deg);
  }
  .cd-single-point.is-open::after {
    /* remove pulse effect */
    display: none;
  }
  .cd-single-point.is-open .cd-more-info {
    visibility: visible;
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    -webkit-transition: opacity 0.3s 0s, visibility 0s 0s,
      -webkit-transform 0.3s 0s, top 0.3s 0s, bottom 0.3s 0s, left 0.3s 0s,
      right 0.3s 0s;
    -moz-transition: opacity 0.3s 0s, visibility 0s 0s, -moz-transform 0.3s 0s,
      top 0.3s 0s, bottom 0.3s 0s, left 0.3s 0s, right 0.3s 0s;
    transition: opacity 0.3s 0s, visibility 0s 0s, transform 0.3s 0s,
      top 0.3s 0s, bottom 0.3s 0s, left 0.3s 0s, right 0.3s 0s;
  }
  .cd-single-point.visited > a {
    background-color: #685f99;
  }
  .cd-single-point.visited::after {
    display: none;
  }
  @media only screen and (min-width: 480px) {
    .cd-single-point.is-open .cd-more-info.cd-left {
      right: 140%;
    }
    .cd-single-point.is-open .cd-more-info.cd-right {
      left: 140%;
    }
    .cd-single-point.is-open .cd-more-info.cd-top {
      bottom: 140%;
    }
    .cd-single-point.is-open .cd-more-info.cd-bottom {
      top: 140%;
    }
  }
  @media only screen and (min-width: 1170px) {
    .cd-single-point {
      -webkit-transform: scale(0);
      -moz-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
    }
    .cd-single-point::after {
      -webkit-animation: none;
      -moz-animation: none;
      animation: none;
    }
    .points-enlarged .cd-single-point {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
      -webkit-animation: cd-bounce 0.4s;
      -moz-animation: cd-bounce 0.4s;
      animation: cd-bounce 0.4s;
    }
    .points-pulsing .cd-single-point::after {
      -webkit-animation: cd-pulse 2s infinite;
      -moz-animation: cd-pulse 2s infinite;
      animation: cd-pulse 2s infinite;
    }
  }

  .no-csstransforms3d .cd-single-point {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  @-webkit-keyframes cd-bounce {
    0% {
      -webkit-transform: scale(0);
    }
    60% {
      -webkit-transform: scale(1.2);
    }
    100% {
      -webkit-transform: scale(1);
    }
  }
  @-moz-keyframes cd-bounce {
    0% {
      -moz-transform: scale(0);
    }
    60% {
      -moz-transform: scale(1.2);
    }
    100% {
      -moz-transform: scale(1);
    }
  }
  @keyframes cd-bounce {
    0% {
      -webkit-transform: scale(0);
      -moz-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
    }
    60% {
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes cd-pulse {
    0% {
      -webkit-transform: scale(1);
      box-shadow: inset 0 0 1px 1px rgba(234, 74, 85, 0.8);
    }
    50% {
      box-shadow: inset 0 0 1px 1px rgba(234, 74, 85, 0.8);
    }
    100% {
      -webkit-transform: scale(1.6);
      box-shadow: inset 0 0 1px 1px rgba(234, 74, 85, 0);
    }
  }
  @-moz-keyframes cd-pulse {
    0% {
      -moz-transform: scale(1);
      box-shadow: inset 0 0 1px 1px rgba(234, 74, 85, 0.8);
    }
    50% {
      box-shadow: inset 0 0 1px 1px rgba(234, 74, 85, 0.8);
    }
    100% {
      -moz-transform: scale(1.6);
      box-shadow: inset 0 0 1px 1px rgba(234, 74, 85, 0);
    }
  }
  @keyframes cd-pulse {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
      box-shadow: inset 0 0 1px 1px rgba(234, 74, 85, 0.8);
    }
    50% {
      box-shadow: inset 0 0 1px 1px rgba(234, 74, 85, 0.8);
    }
    100% {
      -webkit-transform: scale(1.6);
      -moz-transform: scale(1.6);
      -ms-transform: scale(1.6);
      -o-transform: scale(1.6);
      transform: scale(1.6);
      box-shadow: inset 0 0 1px 1px rgba(234, 74, 85, 0);
    }
  }
  .cd-single-point .cd-more-info {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    text-align: left;
    line-height: 1.5;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 2em 1em 1em;
    visibility: hidden;
    opacity: 0;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
    -webkit-transition: opacity 0.3s 0s, visibility 0s 0.3s,
      -webkit-transform 0.3s 0s, top 0.3s 0s, bottom 0.3s 0s, left 0.3s 0s,
      right 0.3s 0s;
    -moz-transition: opacity 0.3s 0s, visibility 0s 0.3s, -moz-transform 0.3s 0s,
      top 0.3s 0s, bottom 0.3s 0s, left 0.3s 0s, right 0.3s 0s;
    transition: opacity 0.3s 0s, visibility 0s 0.3s, transform 0.3s 0s,
      top 0.3s 0s, bottom 0.3s 0s, left 0.3s 0s, right 0.3s 0s;
  }
  .cd-single-point .cd-more-info::before {
    /* triangle next to the interest point description - hidden on mobile */
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    display: none;
    border: 8px solid transparent;
  }
  .cd-single-point .cd-more-info h2 {
    font-size: 2.2rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    margin-bottom: 0.6em;
  }
  .cd-single-point .cd-more-info p {
    color: #3d385a;
  }
  @media only screen and (min-width: 480px) {
    .cd-single-point .cd-more-info {
      position: absolute;
      width: 220px;
      height: 240px;
      padding: 1em;
      overflow-y: visible;
      line-height: 1.4;
      border-radius: 0.25em;
      box-shadow: 0 0 20px rgba(61, 56, 90, 0.3);
    }
    .cd-single-point .cd-more-info::before {
      display: block;
    }
    .cd-single-point .cd-more-info.cd-left,
    .cd-single-point .cd-more-info.cd-right {
      top: 50%;
      bottom: auto;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    .cd-single-point .cd-more-info.cd-left::before,
    .cd-single-point .cd-more-info.cd-right::before {
      top: 50%;
      bottom: auto;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    .cd-single-point .cd-more-info.cd-left {
      right: 160%;
      left: auto;
    }
    .cd-single-point .cd-more-info.cd-left::before {
      border-left-color: rgba(255, 255, 255, 0.95);
      left: 100%;
    }
    .cd-single-point .cd-more-info.cd-right {
      left: 160%;
    }
    .cd-single-point .cd-more-info.cd-right::before {
      border-right-color: rgba(255, 255, 255, 0.95);
      right: 100%;
    }
    .cd-single-point .cd-more-info.cd-top,
    .cd-single-point .cd-more-info.cd-bottom {
      left: 50%;
      right: auto;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .cd-single-point .cd-more-info.cd-top::before,
    .cd-single-point .cd-more-info.cd-bottom::before {
      left: 50%;
      right: auto;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .cd-single-point .cd-more-info.cd-top {
      bottom: 160%;
      top: auto;
    }
    .cd-single-point .cd-more-info.cd-top::before {
      border-top-color: rgba(255, 255, 255, 0.95);
      top: 100%;
    }
    .cd-single-point .cd-more-info.cd-bottom {
      top: 160%;
    }
    .cd-single-point .cd-more-info.cd-bottom::before {
      border-bottom-color: rgba(255, 255, 255, 0.95);
      bottom: 100%;
    }
    .cd-single-point .cd-more-info h2 {
      margin-bottom: 0;
    }
    .cd-single-point .cd-more-info p {
      font-size: 1.3rem;
    }
  }

  .cd-close-info {
    /* close the interest point description - only on mobile */
    position: fixed;
    top: 0;
    right: 0;
    height: 44px;
    width: 44px;
  }
  .cd-close-info::after,
  .cd-close-info:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    background-color: #ea4a55;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -moz-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -o-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -webkit-transition-property: transform 0.2s;
    -moz-transition-property: transform 0.2s;
    transition-property: transform 0.2s;
  }
  .cd-close-info::after {
    height: 2px;
    width: 16px;
  }
  .cd-close-info::before {
    height: 16px;
    width: 2px;
  }
  @media only screen and (min-width: 480px) {
    .cd-close-info {
      display: none;
    }
  }

  .contact {
    margin-top: 110px;
  }
`
class Profile extends Component {
  state = { addClass: false }

  toggle = () => {
    this.setState({ addClass: !this.state.addClass })
  }
  render() {
    let boxClass = ['cd-product']
    let closer = ['cd-close-product-tour']
    let point = ['cd-single-point']
    if (this.state.addClass) {
      boxClass.push('is-product-tour')
    }
    if (this.state.addClass) {
      closer.push('is-visible')
    }

    return (
      <Wrap>
        <div className="cd-product" className={boxClass.join(' ')}>
          <div className="cd-product-intro">
            <h1>{this.props.person}</h1>
            <p>{this.props.info}</p>
            <div className="cd-triggers">
              <a
                onClick={this.toggle}
                href="#cd-product-tour"
                id="cd-start"
                className="cd-btn"
              >
                Learn More
              </a>
            </div>
          </div>

          <div id="cd-product-tour" className="cd-product-mockup">
            <img
              src={this.props.image}
              alt="Preview image"
              height="600px"
              width="334.8px"
            />
            <div className="cd-3d-right-side" />
            <div className="cd-3d-bottom-side" />
          </div>
          <a
            onClick={this.toggle}
            href="#cd-product"
            className="cd-close-product-tour cd-img-replace"
            className={closer.join(' ')}
          />
        </div>
      </Wrap>
    )
  }
}

export default Profile
