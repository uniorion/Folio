(function(global){
  'use strict';

  var document      = global.document;
  var el_header     = document.querySelector('header');
  var btn_hambuger  = el_header.querySelector('.btn-hambuger');
  var logo          = el_header.querySelector('.logo');
  var gnb           = el_header.querySelector('header nav');

  global.onresize = function() {
    // 브라우저 width 감지하여 750px 초과 시 
    // gnb 메뉴가 열려 있으면 닫기
    var device_width = getWindowWidth();
    if ( device_width > 750 ) {
      isGnbOpen() ? toggleGnb() : false;
    }
    else {
      // 750px 이하 시 gnb메뉴 감추기
      fixTopMenu();
    }
  };

  // gnb 메뉴 fix 처리
  global.onscroll = fixTopMenu;

  // 클릭 시 gnb 메뉴 토글
  btn_hambuger.onclick = toggleGnb;

  //-----------------------------------------------------------------
  /**
   * 세로 스크롤 값에 따라 상단에 gnb 메뉴 fix
   * @return {[type]} [description]
   */
  function fixTopMenu() {
    var device_width  = getWindowWidth();
    var scroll_y      = getScrollY();
    var cl_header     = el_header.getAttribute('class');

    if (scroll_y <= 86) {
      // fix 된 gnb 메뉴 제거
      el_header.setAttribute( 'class', cl_header.replace(' top-fix', '') );
    }
    else{
      // gnb 메뉴 fix
      if ( !isGnbFix() ) {
        el_header.setAttribute( 'class', cl_header + ' top-fix' );
      }
    }
  }

  /**
   * mobile_gnb 메뉴가 열려있는지 확인
   * @return {Boolean} [true:열림 / false:닫힘]
   */
  function isGnbOpen() {
    var cl_gnb = gnb.getAttribute('class') || '';
    return cl_gnb.indexOf('on') > -1 ? true : false;
  }

  /**
   * mobile_gnb 메뉴 top에 고정된 상태인지 확인
   * @return {Boolean} [true:고정 / false:비고정]
   */
  function isGnbFix() {
    var cl_header = el_header.getAttribute('class') || '';
    return cl_header.indexOf('top-fix') > -1 ? true : false;
  }

  /**
   * mobile_gnb 메뉴 토글
   * @return 없음
   */
  function toggleGnb() {
    var cl_gnb          = gnb.getAttribute('class') || '';
    var cl_logo         = logo.getAttribute('class') || '';
    var cl_btn_hambuger = btn_hambuger.getAttribute('class') || '';

    if ( cl_gnb.indexOf('on') > -1 ) {
      // 열림 상태 => 닫음
      gnb.setAttribute( 'class', cl_gnb.replace('on', '') );
      logo.setAttribute( 'class', cl_logo.replace('menu-on', '') );
      btn_hambuger.setAttribute( 'class', cl_btn_hambuger.replace('menu-on', '') );
    } 
    else {
      // 닫힘 상태 => 열림
      gnb.setAttribute( 'class', cl_gnb + ' on' );
      logo.setAttribute( 'class', cl_logo + ' menu-on' );
      btn_hambuger.setAttribute( 'class', cl_btn_hambuger + ' menu-on' );
    }
  }

  /**
   * 브라우저 width 값을 반환
   * @return {integer} 
   */
  function getWindowWidth() {
      return global.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }
  
  /**
   * 스크롤 세로 위치값을 반환
   * @return {[type]} [description]
   */
  function getScrollY() {
    return global.scrollY || global.pageYOfsset || global.scrollTop;
  }

})(this);