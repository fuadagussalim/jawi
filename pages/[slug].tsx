import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../components/container";
import AboutBody from "../components/about-body";
import MoreStories from "../components/more-stories";
import Header from "../components/header";
import PostHeader from "../components/post-header";
import SectionSeparator from "../components/section-separator";
import Layout from "../components/layout";
import PostTitle from "../components/post-title";
import Tags from "../components/tags";
import { getAllPagesWithSlug, getPortofolioBySlug, getPostAndMorePosts, getPageBySlug } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Footer from "../components/footer";
import PortofolioHeader from "../components/portofolio-header";
import { OtherpageBanner } from "../components/Banner";
import { title } from "process";
import PostBody from "../components/post-body";
export default function Index({page:{node}}

  // { portofolio, preview }
  ) {
//     const contentCuk = <>
//     <>
//     <div class="blockart-section blockart-section-875b07e7"><div class="blockart-container"><div class="blockart-section-inner"><!-- wp:blockart/column {"clientId":"c77af013","colWidth":{"desktop":33.33,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-c77af013"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"d70d2589","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-d70d2589"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"881df319","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/Dennis-Albihad.jpg","id":1525,"height":1755,"width":2250,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-881df319"><img class="wp-image-1525 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/Dennis-Albihad.jpg" alt="" height="1755" width="2250"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"71f5e9f6","markup":"h6","text":"Director","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-71f5e9f6">Director</h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"5f38cc6e","markup":"h3","text":"Dennis Albihad","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-5f38cc6e">Dennis Albihad</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column -->

// <!-- wp:blockart/column {"clientId":"174eef1f","colWidth":{"desktop":33.33,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-174eef1f"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"df774b03","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-df774b03"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"ad347e1a","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/Komodos-Report.jpg","id":1659,"height":413,"width":464,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-ad347e1a"><img class="wp-image-1659 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/Komodos-Report.jpg" alt="" height="413" width="464"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"309f935c","markup":"h6","text":"secretary","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-309f935c">secretary</h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"4f897c16","markup":"h3","text":"Tungga Dewi Hastomo Putri","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-4f897c16">Tungga Dewi Hastomo Putri</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column -->

// <!-- wp:blockart/column {"clientId":"6cac4fe4","colWidth":{"desktop":33.34,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-6cac4fe4"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"860e2646","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-860e2646"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"36624e0f","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/Dini.jpg","id":1526,"height":539,"width":696,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-36624e0f"><img class="wp-image-1526 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/Dini.jpg" alt="" height="539" width="696"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"61fdb3fa","markup":"h6","text":"finance","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-61fdb3fa">finance</h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"6cade5bf","markup":"h3","text":"Farah Dini Rachmawati","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-6cade5bf">Farah Dini Rachmawati</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column --></div></div></div>
// <!-- /wp:blockart/section -->

// <!-- wp:blockart/section {"clientId":"6d8b270a","columns":3,"childRow":true,"width":{"desktop":{"value":850,"unit":"px"}}} -->
// <div class="blockart-section blockart-section-6d8b270a"><div class="blockart-container"><div class="blockart-section-inner"><!-- wp:blockart/column {"clientId":"31c75363","colWidth":{"desktop":33.33,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-31c75363"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"6452ad74","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-6452ad74"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"036e4754","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/Taf.jpg","id":1610,"height":496,"width":412,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-036e4754"><img class="wp-image-1610 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/Taf.jpg" alt="" height="496" width="412"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"b3f26520","markup":"h6","text":"head of conservation data science","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-b3f26520">head of conservation data science</h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"ed05cab4","markup":"h3","text":"Muhammad Tafrichan","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-ed05cab4">Muhammad Tafrichan</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column -->

// <!-- wp:blockart/column {"clientId":"067f4580","colWidth":{"desktop":33.33,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-067f4580"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"86b719ed","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-86b719ed"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"60747654","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/Epoek.jpg","id":1611,"height":452,"width":425,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-60747654"><img class="wp-image-1611 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/Epoek.jpg" alt="" height="452" width="425"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"4245ba33","markup":"h6","text":"head of conservation business analyst","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-4245ba33">head of conservation business analyst</h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"e2504a32","markup":"h3","text":"Febrian Edi Nugroho","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-e2504a32">Febrian Edi Nugroho</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column -->

// <!-- wp:blockart/column {"clientId":"db1d93bf","colWidth":{"desktop":33.34,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-db1d93bf"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"91209f01","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-91209f01"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"a22a7ea7","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/Rahma-Ayu-Nabila-03-1.jpeg","id":1664,"height":2179,"width":2045,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-a22a7ea7"><img class="wp-image-1664 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/Rahma-Ayu-Nabila-03-1.jpeg" alt="" height="2179" width="2045"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"bcf71cc9","markup":"h6","text":"Head of conservation media analyst","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-bcf71cc9">Head of conservation media analyst</h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"b5b3c339","markup":"h3","text":"Rahma Ayu Nabila","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-b5b3c339">Rahma Ayu Nabila</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column --></div></div></div>
// <!-- /wp:blockart/section -->

// <!-- wp:blockart/section {"clientId":"34a22ea9","columns":3,"childRow":true,"width":{"desktop":{"value":850,"unit":"px"}}} -->
// <div class="blockart-section blockart-section-34a22ea9"><div class="blockart-container"><div class="blockart-section-inner"><!-- wp:blockart/column {"clientId":"4d5eb19d","colWidth":{"desktop":33.33,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-4d5eb19d"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"a5d713a8","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-a5d713a8"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"942b98df","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/eny.jpg","id":1527,"height":480,"width":693,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-942b98df"><img class="wp-image-1527 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/eny.jpg" alt="" height="480" width="693"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"a5ef6819","markup":"h6","text":"staff of conservation business ","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-a5ef6819">staff of conservation business </h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"97d6e2d5","markup":"h3","text":"Eny Wahyu Lestari","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-97d6e2d5">Eny Wahyu Lestari</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column -->

// <!-- wp:blockart/column {"clientId":"041baf23","colWidth":{"desktop":33.33,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-041baf23"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"85ba25f7","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-85ba25f7"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"89bb4c2f","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/yeah.jpg","id":1667,"height":779,"width":734,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-89bb4c2f"><img class="wp-image-1667 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/yeah.jpg" alt="" height="779" width="734"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"b2620b3c","markup":"h6","text":"staff of data science","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-b2620b3c">staff of data science</h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"c10af7a2","markup":"h3","text":"Giot Marganti Ito Simanullang","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-c10af7a2">Giot Marganti Ito Simanullang</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column -->

// <!-- wp:blockart/column {"clientId":"8a4bf1e0","colWidth":{"desktop":33.33,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-8a4bf1e0"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"69f1af2f","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-69f1af2f"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"f84cc83a","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-15-at-08.18.34.jpeg","id":1898,"height":1600,"width":1398,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-f84cc83a"><img class="wp-image-1898 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-15-at-08.18.34.jpeg" alt="" height="1600" width="1398"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"a5547a70","markup":"h6","text":"staff of conservation business","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-a5547a70">staff of conservation business</h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"90602efb","markup":"h3","text":"Rio Syahrudin","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-90602efb">Rio Syahrudin</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column --></div></div></div>
// <!-- /wp:blockart/section -->

// <!-- wp:heading {"textAlign":"center"} -->
// <h2 class="has-text-align-center">Supervisory Board</h2>
// <!-- /wp:heading -->

// <!-- wp:blockart/section {"clientId":"c41e4078","columns":3,"childRow":true,"verticalAlignment":{"desktop":""},"width":{"desktop":{"value":850,"unit":"px"}},"columnGap":{"desktop":{"value":30,"unit":"px"}},"background":{"background":1,"type":"color"},"hoverBackground":{"background":1,"type":"color"},"border":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"borderHover":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"boxShadow":{"boxShadow":1},"boxShadowHover":{"boxShadow":1},"overlayBackground":{"background":1,"color":"rgba(37, 99, 235,0.3)"},"blockMargin":{"dimension":1,"desktop":{"lock":true}},"blockPadding":{"dimension":1,"desktop":{"left":15,"right":15,"unit":"px"}}} -->
// <div class="blockart-section blockart-section-c41e4078"><div class="blockart-container"><div class="blockart-section-inner"><!-- wp:blockart/column {"clientId":"04606530","colWidth":{"desktop":33.33,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-04606530"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"799e72b9","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-799e72b9"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"1d6b02ee","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/Muhammad_Ali_Imron.jpg","id":1533,"height":260,"width":200,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-1d6b02ee"><img class="wp-image-1533 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/Muhammad_Ali_Imron.jpg" alt="" height="260" width="200"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"10504e45","markup":"h6","text":"","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-10504e45"></h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"fe223bfb","markup":"h3","text":"Dr. Muhammad Ali Imron","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-fe223bfb">Dr. Muhammad Ali Imron</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column -->

// <!-- wp:blockart/column {"clientId":"a323f6ef","colWidth":{"desktop":33.33,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-a323f6ef"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"1bce4ad6","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-1bce4ad6"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"5b850775","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/Ryan.jpeg","id":1537,"height":512,"width":768,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-5b850775"><img class="wp-image-1537 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/Ryan.jpeg" alt="" height="512" width="768"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"aba65c9f","markup":"h6","text":"","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-aba65c9f"></h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"60dde4e6","markup":"h3","text":"Ryan Adi Satria","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-60dde4e6">Ryan Adi Satria</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column -->

// <!-- wp:blockart/column {"clientId":"285ee298","colWidth":{"desktop":33.34,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-285ee298"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"3fbae6f5","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-3fbae6f5"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"2495305e","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/Arok.jpg","id":1536,"height":900,"width":900,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-2495305e"><img class="wp-image-1536 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/Arok.jpg" alt="" height="900" width="900"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"fc5dbd97","markup":"h6","text":"","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-fc5dbd97"></h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"5554486b","markup":"h3","text":"Fikri Al Mubarok","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-5554486b">Fikri Al Mubarok</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column --></div></div></div>
// <!-- /wp:blockart/section -->

// <!-- wp:blockart/section {"clientId":"5b0f60ad","columns":3,"childRow":true,"verticalAlignment":{"desktop":""},"width":{"desktop":{"value":850,"unit":"px"}},"columnGap":{"desktop":{"value":30,"unit":"px"}},"background":{"background":1,"type":"color"},"hoverBackground":{"background":1,"type":"color"},"border":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"borderHover":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"boxShadow":{"boxShadow":1},"boxShadowHover":{"boxShadow":1},"overlayBackground":{"background":1,"color":"rgba(37, 99, 235,0.3)"},"blockMargin":{"dimension":1,"desktop":{"lock":true}},"blockPadding":{"dimension":1,"desktop":{"left":15,"right":15,"unit":"px"}}} -->
// <div class="blockart-section blockart-section-5b0f60ad"><div class="blockart-container"><div class="blockart-section-inner"><!-- wp:blockart/column {"clientId":"f1962e1d","colWidth":{"desktop":33.33,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-f1962e1d"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"ee4de289","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-ee4de289"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"ca5f2f2a","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/Argo.jpeg","id":1535,"height":600,"width":600,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-ca5f2f2a"><img class="wp-image-1535 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/Argo.jpeg" alt="" height="600" width="600"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"c7c5dded","markup":"h6","text":"","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-c7c5dded"></h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"0a748cb2","markup":"h3","text":"\u003ca href=\u0022https://id.linkedin.com/in/stephanus-argo-yan-4280751b1\u0022\u003eStephanus Argo Yan\u003c/a\u003e","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-0a748cb2"><a href="https://id.linkedin.com/in/stephanus-argo-yan-4280751b1">Stephanus Argo Yan</a></h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column -->

// <!-- wp:blockart/column {"clientId":"7c3b2765","colWidth":{"desktop":33.33,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-7c3b2765"><div class="blockart-column-inner"><!-- wp:blockart/column {"clientId":"0c69f6fe","colWidth":{"desktop":100,"tablet":100,"mobile":100},"background":{"background":1,"type":"color","color":"#ffffff"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}},"type":"solid","color":"rgba(7,54,116,0.1)","size":{"desktop":{"top":1,"unit":"px","lock":true,"right":1,"bottom":1,"left":1}}},"borderHover":{"border":1,"radius":{"desktop":{"unit":"px","lock":true}},"type":"solid","size":{"desktop":{"lock":true,"unit":"px","top":1,"right":1,"bottom":1,"left":1}}},"boxShadowHover":{"boxShadow":1,"enable":true,"horizontalX":15,"verticalY":15,"blur":30,"color":"rgba(7,54,116,0.1)"},"blockMargin":{"desktop":{"lock":false,"unit":"px","top":30},"dimension":1},"blockPadding":{"desktop":{"top":20,"unit":"px","lock":true,"right":20,"bottom":20,"left":20},"dimension":1}} -->
// <div class="blockart-column blockart-column-0c69f6fe"><div class="blockart-column-inner"><!-- wp:blockart/image {"clientId":"6e321104","image":{"url":"http://jawi.or.id/wp-content/uploads/2023/01/Wiwid-Prayoga.jpg","id":1534,"height":512,"width":512,"alt":""},"alignment":{"desktop":"left"},"objectFit":{"desktop":"cover"},"border":{"border":1,"radius":{"desktop":{"top":16,"unit":"px","lock":true,"right":16,"bottom":16,"left":16}}},"width":{"desktop":{"value":100,"unit":"%"}},"height":{"desktop":{"value":150,"unit":"px"},"tablet":{"value":200,"unit":"px"}}} -->
// <figure class="blockart-image blockart-image-6e321104"><img class="wp-image-1534 hover-effect-static filter-none mask mask-none" src="http://jawi.or.id/wp-content/uploads/2023/01/Wiwid-Prayoga.jpg" alt="" height="512" width="512"/></figure>
// <!-- /wp:blockart/image -->

// <!-- wp:blockart/heading {"clientId":"3a1d3604","markup":"h6","text":"","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":500,"transform":"uppercase","size":{"desktop":{"value":14,"unit":"px"}},"family":"Work Sans"},"margin":{"desktop":{"lock":false,"top":20,"bottom":10,"unit":"px"},"dimension":1}} -->
// <h6 class="blockart-heading blockart-heading-3a1d3604"></h6>
// <!-- /wp:blockart/heading -->

// <!-- wp:blockart/heading {"clientId":"06fbf309","markup":"h3","text":"Wiwit Prayoga","alignment":{"desktop":"center"},"typography":{"typography":1,"weight":600,"size":{"desktop":{"value":20,"unit":"px"}},"family":"Work Sans"}} -->
// <h3 class="blockart-heading blockart-heading-06fbf309">Wiwit Prayoga</h3>
// <!-- /wp:blockart/heading --></div></div>
// <!-- /wp:blockart/column --></div></div>
// <!-- /wp:blockart/column -->

// <!-- wp:blockart/column {"clientId":"ca07b97b","colWidth":{"desktop":33.34,"tablet":100,"mobile":100}} -->
// <div class="blockart-column blockart-column-ca07b97b"><div class="blockart-column-inner"></div></div>
// <!-- /wp:blockart/column --></div></div></div>
// <!-- /wp:blockart/section --></div></div>
// <!-- /wp:blockart/column --></div></div></div>    
//     </>
    
    
    
//     </>

    // console.log("about ",contentCuk.props.children)
  // const router = useRouter();
  // // const morePortofolios = portofolios?.edges;
  // // console.log('post itu apa',portofolio)

  // if (!router.isFallback && !portofolio?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }

  return (
    <Layout preview={false}>
      <OtherpageBanner image={node?.front.banner.node.sourceUrl??"/hero.jpg"} maintext={node.front?.judul??"About"} subtext={node.front?.subjudul??"Kenali lebih dalam tentang kami"}/>
      <PostBody content={node?.content??"Tidak dapat memperoleh data :("}/>

  
  
      {/* <AboutBody content={contentCuk.props.children}> */}

      {/* </AboutBody> */}
      <div>
        
      </div>
     
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  // const data = await getPostAndMorePosts(params?.slug, preview, previewData);
  // console.log('params itu apa',params)
  // console.log('data post itu apa',data.post)
  const slug = typeof params?.slug === 'string' ? params.slug : '';
const data = await getPageBySlug(slug);
  console.log('slug', slug)
  console.log('data halaman',data.edges[0])
  return {
    props: {
      
      page: data.edges[0]
      
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = await getAllPagesWithSlug();
  // console.log('halaman by slug', allPages);
  // console.log('ini adalah slug stuan: ',allPages.edges[0
  // ].node.slug)

  const paths = allPages.edges.map(({ node }) => (
    
    {
    
    params: { slug: node.slug },
  }
  ));

  return {
    paths,
    fallback: true,
  };
};
