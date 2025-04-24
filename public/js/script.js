function storeLog(name, href) {
  $.ajax({
    url: 'https://www.xn--2z1bw8k1pjz5ccumkb.kr/extrldata/simul.do',
    type: 'post',
    accept: 'application/json',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify({
      'Header': {
        'commonHeader': {
          'SERVICE_NAME': '디지털배움터',
        },
      },
      'Body': {
        'getReqstInfo': {
          'NAME': name,  // Sample. 이름
          'PATH': location.href,  // Sample. 경로
        },
      },
    }),
    dataType: 'json',
    success: function(data) {
      if (data && data.Body && data.Body.getRespnsInfo && data.Body.getRespnsInfo.RES_MSG && data.Body.getRespnsInfo.RES_MSG == 'SUCCESS') {
        // response. 성공 처리 코드 추가
        console.log('SUCCESS');
      } else {
        // response. 실패 처리 코드 추가
        console.log('FAIL');
      }
      location.href = href;
    }
    , error: function(xhr) {
      // response. 실패 처리 코드 추가
      console.log(JSON.stringify(xhr));
      location.href = href;
    },
  });
}

$(function() {
  // Header, Footer 레이아웃
  $('#header').load('/layout/header.html');
  $('#footer-logo').load('/layout/footer-logo.html');
  $('#footer-info').load('/layout/footer-info.html');

  // 준비중 alert
  $('.ready').on('click', function() {
    alert('준비 중입니다.');
  });
});