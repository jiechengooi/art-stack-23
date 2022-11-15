$(document).ready(function(){
    
  	$('.home-inner').addClass('animate');

    
 var arrLang = new Array();
    arrLang['en'] = new Array();
    arrLang['ar'] = new Array();

    // English content
    arrLang['en']['home'] = 'Home';
    arrLang['en']['services'] = 'Services';
    arrLang['en']['about'] = 'About';
    arrLang['en']['why'] = 'Why Us';
    arrLang['en']['contact'] = 'Contact';
    
    arrLang['en']['name'] = 'Art Studio';
    arrLang['en']['trust'] = 'Best Art In The Town';
    arrLang['en']['start'] = 'Get Started';

    arrLang['en']['our'] = 'Our Services';
    arrLang['en']['mainteinance'] = 'Painting';
    arrLang['en']['residental'] = 'Sculpting';
    arrLang['en']['commercial'] = 'Commercial Service';
    arrLang['en']['main-pra'] = 'Painting is the practice of applying paint, pigment, color or other medium to a solid surface. The medium is commonly applied to the base with a brush, knives, sponges, and airbrushes, can be used. It  describes both the act and the result of the action. ';
    arrLang['en']['comm-pra'] = 'Sculpture is the art work which is physically presented in the dimensions of height, width and depth. It is one of the plastic arts. Durable sculptural processes originally used carving and modelling, in stone, metal, ceramics, wood and other materials .';
    arrLang['en']['res-pra'] = 'Photography is the practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It is employed in many area such as art, film and video production. ';

    arrLang['en']['dream'] = 'Lets Build Your Dream Together';
    arrLang['en']['dream-pra'] = 'Since the beginning of civilisation, human and art have never parted ways. Over the millennia, the world has seen a plethora of beautiful art movements led by great artists. Now in the 21st century, we can appreciate different styles of art, painting in particular, ranging from Western to Eastern style. Here are some of the major art painting styles throughout history. Paintings can be naturalistic and representational (as in still life and landscape painting), photographic, abstract, narrative, symbolistic (as in Symbolist art), emotive (as in Expressionism) or political in nature (as in Artivism). ';
    
    arrLang['ar']['project'] = 'Master piece';
    arrLang['ar']['total'] = 'Total artist';
    arrLang['ar']['client'] = 'Sold';

    arrLang['en']['expert'] = 'Accrediction';
    arrLang['en']['quality'] = 'Quality work';
    arrLang['en']['customer'] = 'Cash refund';
    
    arrLang['en']['expert-pra'] = 'Our studio is fully accredicted by the government and international organization,';
    arrLang['en']['quality-pra'] = 'Our art development team is experienced in painting, sculpting and photographing.';      
    arrLang['en']['customer-pra'] = 'Customer satisfaction is our satisfaction, we allow cash refund on any imperfection';
    arrLang['en']['comm-pra'] = 'Sculpture is the art work which is physically presented in the dimensions of height, width and depth. It is one of the plastic arts. Durable sculptural processes originally used carving and modelling, in stone, metal, ceramics, wood and other materials .';
    arrLang['en']['phrase-title'] = 'We Turn Your Vision Into Reality';
    arrLang['en']['phrase-pra'] = 'We Help Our Customers Achive Their Dreams';
    
    arrLang['en']['footer-phrase'] = 'We have created enviromental friendly product from waste ';
    arrLang['en']['footer-location'] = 'Our Location';
    arrLang['en']['footer-street'] = 'Happy town, Malaysia';
    arrLang['en']['footer-contact'] = 'Contact Info';
    arrLang['en']['footer-num'] = '+60123456789';
    arrLang['en']['footer-name'] = 'cheng jie';


    // arabic  content (Cambodian Language) 
    arrLang['ar']['home'] = 'Umum';
    arrLang['ar']['services'] = 'Perkhidmatan';
    arrLang['ar']['about'] = 'Tentang';
    arrLang['ar']['why'] = 'Kenapa kita';
    arrLang['ar']['contact'] = 'Hubungi';
    
    arrLang['ar']['name'] = 'Art studio';
    arrLang['ar']['trust'] = 'Perkhidmatan seni terbaik di bandar';
    arrLang['ar']['start'] ='Mulai Sekarang';
    
    arrLang['ar']['our'] = 'Perkhidmatan kita';
    arrLang['ar']['mainteinance'] = 'Melukis';
    arrLang['ar']['residental'] = 'Mengukir';
    arrLang['ar']['commercial'] = 'Fotografi';
    arrLang['ar']['main-pra'] = "Melukis ialah amalan menyapu cat, pigmen, warna atau medium lain pada permukaan pepejal. Medium biasanya digunakan pada asas dengan berus, pisau, span, dan berus udara, boleh digunakan. Ia menerangkan kedua-dua perbuatan dan hasil daripada tindakan itu.";
    arrLang['ar']['res-pra'] = 'Arca ialah hasil seni yang dipersembahkan secara fizikal dalam dimensi ketinggian, lebar dan kedalaman. Ia adalah salah satu seni plastik. Proses arca tahan lama pada asalnya menggunakan ukiran dan pemodelan, dalam batu, logam, seramik, kayu dan bahan lain .';
    arrLang['ar']['comm-pra'] = "Fotografi ialah amalan mencipta imej tahan lama dengan merakam cahaya, sama ada secara elektronik melalui penderia imej, atau secara kimia melalui bahan sensitif cahaya seperti filem fotografi. Ia digunakan dalam banyak bidang seperti seni, filem dan pengeluaran video.";

    arrLang['ar']['dream'] = 'Lets Build Your Dream Together';
    arrLang['ar']['dream-pra'] = 'Sejak permulaan tamadun, manusia dan seni tidak pernah berpisah. Selama beribu tahun, dunia telah menyaksikan pelbagai gerakan seni yang indah yang diketuai oleh artis-artis hebat. Kini dalam abad ke-21, kita boleh menghargai gaya seni yang berbeza, khususnya lukisan, dari gaya Barat hingga Timur. Berikut adalah beberapa gaya lukisan seni utama sepanjang sejarah. Lukisan boleh bersifat naturalistik dan representasional (seperti dalam lukisan masih hidup dan landskap), fotografi, abstrak, naratif, simbolistik (seperti dalam seni Simbolis), emotif (seperti dalam Ekspresionisme) atau bersifat politik (seperti dalam Artivisme).';
    
    arrLang['ar']['project'] = 'Karya';
    arrLang['ar']['total'] = 'Bilangan seniman';
    arrLang['ar']['client'] = 'Jualan';

    arrLang['ar']['expert'] = 'Akreditasi';
    arrLang['ar']['quality'] = 'Kualiti Karya';
    arrLang['ar']['customer'] = 'Pemulangan tunai';
    
    arrLang['ar']['expert-pra'] = 'Studio kami mendapat pengiktirafan sepenuhnya oleh kerajaan dan organisasi antarabangsa.';
    arrLang['ar']['quality-pra'] = 'Pasukan pembangunan seni kami berpengalaman dalam melukis, memahat dan mengambil gambar.';      
    arrLang['ar']['customer-pra'] = 'Kepuasan pelanggan diutamakan, kami akan kembalikan wang atas sebarang ketidaksempurnaan';

    arrLang['ar']['phrase-title'] = 'We Turn Your Vision Into Reality';
    arrLang['ar']['phrase-pra'] = 'We Help Our Customers Achive Their Dreams';
    
    arrLang['ar']['footer-phrase'] = 'We have created enviromental friendly product from waste ';
    arrLang['ar']['footer-location'] = 'Our Location';
    arrLang['ar']['footer-street'] = 'Happy town, Malaysia';
    arrLang['ar']['footer-contact'] = 'Contact Info';
    arrLang['ar']['footer-num'] = '+60123456789';
    arrLang['ar']['footer-name'] = 'cheng jie';


     var lang;
    
    (function(window, $) {
      lang = window.navigator.language;
    if (lang == 'ar' ) {
        lang = 'ar';  
    }else{
        
      lang = 'en';  
 
    }
    })(window, jQuery);

    

    // Process translation
    $(function() {
      $('.translate').click(function() {
          lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        // $("p").css( "color", "red");
          if(lang == "ar"){
         $('html, body').css( "direction"," ltr" );

          }

      });
    });
    
    
    $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    
    
});

 