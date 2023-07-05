$(document).ready(function(){
    $(".ctn__slick-list").slick({
      slidesToShow: 4, // so luong anh hien thi
      slidesToScroll: 1, // so anh di qua
      infinite: true, // "true" chay vo tan, "false" co han
      arrows : true, // "false" bo 2 nut trai phai, thay vao do la vuot
      autoplay: true, // chay tu dong
      autoplaySpeed: 2000, // set time
      draggable: false, // khong cho vuot nua
      dots: false, // hien thi vi tri anh
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });